# Customers docs

Test Scenarios for Customer Creation and Subscription Sync Across Platforms

Test Case 1: Shopify Customer Creation & Subscription Sync

Scenario: Customer is created via Shopify login

# Steps:

1. Navigate to the website and initiate a login process.

2. Enter a valid **email** and request OTP.

3.Verify OTP and successfully log in.

4. Validate that the customer is created in **Shopify** with the email provided.

5. Run the Zimble job.

6. Validate that the customer record reflects in **Klaviyo** and **AP21.**

7. Verify subscription status:

**。Shopify**: Email subscription should be **Unsubscribed.**

**。Klaviyo**: Should be **Unsubscribed** for Email and SMS.

**。AP21**: Should match Shopify's status.

## Expected Outcome:

·The customer is successfully created in **Shopify.**

·The customer record is replicated in **AP21** and **Klaviyo.**

·Subscription statuses reflect accurately in all platforms.

**Test** **Case** 2: Klaviyo Customer Creation & Subscription Sync

Scenario: Customer subscribes via website footer

# Steps:

1. Navigate to the **footer** of the website.

2. Enter a valid **email** and (optionnally) provide **a** **mobile** **number.**

3. Select a **gender** preference.

4. Submit the subscription form.

5. Validate that the customer is created in **Klaviyo.**

6. Run the Zimble job.

7. Validate that the customer record reflects in **Shopify** and **AP21.**

8.Verify subscription status:

**。Shopify**: Email & SMS subscription should be **Subscribed.**

**。Klaviyo**: Email & SMS should be **Subscribed.**

**。AP21**: Should match Klaviyo's status.

## Expected Outcome:

·The customer is successfully created in **Klaviyo.**

·The customer record is replicated in **Shopify** and **AP21.**

·Subscription statuses reflect accurately in all platforms.

**Test Case 3: AP21 Customer Creation with Privacy Opt-in**

**Scenario: Customer created in AP21 with privacy Opt-in**

# Steps:

1. Navigate to AP21 customer creation form.

2. Enter the following details:

**。Customer Code**

**。Name**

**。Gender**

**。Opt-in Privacy = Yes**

**。Retail Checkbox = Checked**

**。Address**

**。Email & Mobile Number**

**。Reference**

3.Save the customer record.

4. Run the Zimble job.

5. Validate that the customer record reflects in **Shopify** and **Klaviyo.**

6. Verify subscription status:

**。Shopify**: Email & SMS subscription should be **Unsubscribed.**

**。Klaviyo:** Email **&** SMS should be **Unsubscribed.**

## Expected Outcome:

·The customer is successfully created in **AP21.**

·The customer record is replicated in **Shopify** and **Klaviyo.**

·Subscription statuses reflect accurately in all platforms.

**Test Case 4: AP21 Customer Creation with Privacy Opt-out**

**Scenario:** Customer created **in AP21 with** privacy Opt-out

# Steps:

1. Navigate to AP21 customer creation form.

2. Enter the following details:

**。Customer Code**

**。 Name**

**。Gender**

**。 Opt-in Privacy = No**

**。Retail Checkbox = Checked**

**。Address**

**。Email & Mobile Number**

**。Reference**

3. Save the customer record.

4.Run the Zimble job.

5. Validate that the customer record reflects in **Shopify** and **Klaviyo.**

6. Verify subscription status:

**。Shopify**: Email & SMS subscription should be **Subscribed.**

**。Klaviyo:** Email & SMS should be **Subscribed.**

## Expected Outcome:

·The customer is successfully created in **AP21.**

·The customer record is replicated in **Shopify** and **Klaviyo.**

·Subscription statuses reflect accurately in all platforms.

**Test Case 5: Subscription Status Sync Across All Platforms**

**Scenario: Subscription status consistency when the Zimble** job runs

# Steps:

1. Create customers from **Shopify, Klaviyo, and** **AP21** using the scenarios above.

2. Run the Zimble job.

3. Compare subscription statuses in **Shopify,** **Klaviyo, and** **AP21.**

4. Validate that all platforms reflect the correct **subscription** **status** as per their rules.

## Expected Outcome:

·Shopify-created customers should be **Unsubscribed.**

·Klaviyo-created customers should be **Subscribed.**

·AP21-created customers should be **Subscribed** **if** privacy opt-in is **No,** otherwise **Unsubscribed.**

