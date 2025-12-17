#!/bin/bash

# Config
API_URL="http://localhost:3000/api"
EMAIL="test_intake_$(date +%s)@example.com"
PASSWORD="password123"

# Function to check response
check_response() {
    if [ -z "$1" ]; then
        echo "Error: Empty response"
        exit 1
    fi
    echo "$1"
}

# 1. Register
echo "Registering..."
RESPONSE=$(curl -s -X POST "$API_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")
echo "Response: $RESPONSE"

# 2. Login
echo -e "\nLogging in..."
TOKEN=$(curl -s -X POST "$API_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}" | jq -r '.access_token')

if [ "$TOKEN" == "null" ] || [ -z "$TOKEN" ]; then
  echo "Login failed"
  exit 1
fi
echo "Token: $TOKEN"

# 3. Create Profile
echo -e "\nCreating Profile..."
PROFILE_ID=$(curl -s -X POST "$API_URL/profiles" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\": \"Test Profile\"}" | jq -r '.id')
echo "Profile ID: $PROFILE_ID"

# 4. Create Medicine
echo -e "\nCreating Medicine..."
MEDICINE_ID=$(curl -s -X POST "$API_URL/medicines" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"profileId\": \"$PROFILE_ID\", \"name\": \"Aspirin\", \"quantity\": 10}" | jq -r '.id')
echo "Medicine ID: $MEDICINE_ID"

# 5. Record Intake
echo -e "\nRecording Intake..."
curl -s -X POST "$API_URL/intakes" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"medicineId\": \"$MEDICINE_ID\",
    \"profileId\": \"$PROFILE_ID\",
    \"status\": \"TAKEN\",
    \"takenAt\": \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\",
    \"notes\": \"Took with water\"
  }" | jq .

# 6. Get History
echo -e "\nGetting History..."
curl -s -X GET "$API_URL/intakes?profileId=$PROFILE_ID" \
  -H "Authorization: Bearer $TOKEN" | jq .
