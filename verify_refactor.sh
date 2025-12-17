#!/bin/bash

# Config
API_URL="http://localhost:3000/api"
EMAIL="test_refactor_$(date +%s)@example.com"
PASSWORD="password123"

# 1. Register
echo "Registering..."
REGISTER_RESPONSE=$(curl -s -X POST "$API_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")
echo "Register Response: $REGISTER_RESPONSE"

# 2. Login
echo -e "\nLogging in..."
LOGIN_RESPONSE=$(curl -s -X POST "$API_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")
echo "Login Response: $LOGIN_RESPONSE"

TOKEN=$(echo $LOGIN_RESPONSE | jq -r '.access_token')

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
  -d "{\"name\": \"Refactor Profile\"}" | jq -r '.id')
echo "Profile ID: $PROFILE_ID"

# 4. Create Medicine (New Route)
echo -e "\nCreating Medicine via POST /api/medicines..."
MEDICINE_ID=$(curl -s -X POST "$API_URL/medicines" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"profileId\": \"$PROFILE_ID\", \"name\": \"Refactor Med\", \"quantity\": 20}" | jq -r '.id')
echo "Medicine ID: $MEDICINE_ID"

# 5. Get Medicines by Profile (New Route)
echo -e "\nGetting Medicines via GET /api/medicines?profileId=..."
curl -s -X GET "$API_URL/medicines?profileId=$PROFILE_ID" \
  -H "Authorization: Bearer $TOKEN" | jq .

# 6. Update Medicine (New Route)
echo -e "\nUpdating Medicine via PATCH /api/medicines/:id?profileId=..."
curl -s -X PATCH "$API_URL/medicines/$MEDICINE_ID?profileId=$PROFILE_ID" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"quantity\": 25}" | jq .

# 7. Delete Medicine (New Route)
echo -e "\nDeleting Medicine via DELETE /api/medicines/:id?profileId=..."
curl -s -X DELETE "$API_URL/medicines/$MEDICINE_ID?profileId=$PROFILE_ID" \
  -H "Authorization: Bearer $TOKEN" | jq .
