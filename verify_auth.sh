#!/bin/bash

# Config
API_URL="http://localhost:3000/api"
EMAIL="your.email@gmail.com" # Using the email provided by user for testing

# 0. Register (to ensure user exists)
echo "Registering..."
curl -s -X POST "$API_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"oldpassword123\"}"

# 1. Forgot Password
echo "Requesting Password Reset..."
FORGOT_RESPONSE=$(curl -s -X POST "$API_URL/auth/forgot-password" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\"}")
echo "Forgot Response: $FORGOT_RESPONSE"

TOKEN=$(echo $FORGOT_RESPONSE | jq -r '.token')

if [ "$TOKEN" == "null" ] || [ -z "$TOKEN" ]; then
  echo "Failed to get reset token (check if user exists or email service is configured)"
  # We might need to create the user first if it doesn't exist
  exit 1
fi
echo "Reset Token: $TOKEN"

# 2. Reset Password
echo -e "\nResetting Password..."
RESET_RESPONSE=$(curl -s -X POST "$API_URL/auth/reset-password" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"token\": \"$TOKEN\", \"password\": \"newpassword123\"}")
echo "Reset Response: $RESET_RESPONSE"

# 3. Login with new password
echo -e "\nLogging in with new password..."
LOGIN_RESPONSE=$(curl -s -X POST "$API_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"newpassword123\"}")
echo "Login Response: $LOGIN_RESPONSE"
