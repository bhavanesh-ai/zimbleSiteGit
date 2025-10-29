---
title: Core Functionalities
---

<div align="center">

# Core Functionalities

</div>

### 1. Scheduler (Jobs) 🕒: 
The "Job" feature creates tasks such as updating products, managing stock, importing orders, and handling media. Job types are dynamic, designed for future growth, and allow the platform to adapt to evolving business needs. 
We can manage jobs in two ways: recurring jobs and run-once jobs. Run-once jobs are set to run at a specified time and complete afterward. Recurring jobs run at defined intervals, such as every 5 minutes or every hour. 

**Job Status Management**
Every job has a clear and trackable status, making it easier for users to monitor 	execution. The predefined statuses include: 
- **Scheduled** – A job is queued and waiting for its defined start time.  
- **Running** – The job is currently being executed.  
- **Completed** – The job has finished successfully.  
- **Stopped** – The job was manually halted before completion.  
- **Paused** – The job execution is temporarily paused and can be resumed later.

These statuses improve transparency and allow users to identify issues quickly. 

## 2. Job Templates 📝: 
To run a job, a command must define both the job type and the specific steps that the job will execute. This structured approach ensures consistency, automation, and repeatability across various tasks. The platform is designed to support dynamic job types, allowing it to adapt to a wide range of workflows without requiring custom code for each new scenario. This flexibility enhances both scalability and efficiency, making it easier to manage complex business processes.

For instance, consider an "Order Job" template. This job type may include a sequence of predefined steps such as:

- **Fetching new orders** from an external sales channel or internal database.
- **Validating** the order data for completeness and accuracy.
- **Transforming or mapping** the data into a format required by downstream systems.
- **Sending** the order information to Apparel21, a retail ERP system, via API or file-based integration.

By using templates like these, businesses can automate routine processes, minimize errors, and respond quickly to changing operational requirements all without the need for manual intervention or complex reconfiguration.

## 3. Application Config ⚙️:  
The Application Configuration module serves as a critical bridge between ERP systems and e-commerce platforms, facilitating smooth and automated data flow between them. Its primary role is to define how different systems communicate, ensuring that information such as product data, inventory levels, orders, and customer details is accurately synchronized across all platforms.

To set up an integration, the configuration process requires detailed and specific inputs for both the ERP and the e-commerce components. This includes connection credentials, API endpoints, authentication methods, data mapping rules, and scheduling preferences. The configuration must be tailored to the unique capabilities and data formats of each system involved.

**Supported ERP systems include:**

- **Apparel21** - Commonly used in fashion and retail industries.
- **SAP Business One(SAP B1)** – A powerful ERP system designed for small to mid-sized enterprises.
- **Retail Express** – A retail-focused solution for inventory and point-of-sale management.

**Supported e-commerce platforms include:** 
- **Shopify** – A popular cloud-based platform for online retail businesses.
- **BigCommerce** – An enterprise-grade e-commerce solution supporting both B2B and B2C models.

By enabling seamless integration between these systems, the Application Config ensures real-time synchronization of business-critical data. This eliminates the need for manual data entry, reduces the risk of errors, and provides a unified view of operations across sales and fulfillment channels. As a result, businesses can improve operational efficiency, enhance customer experience, and scale more effectively.

## 4. Product Attribute 🏷️:
Product attributes define the key characteristics and metadata associated with each product, such as size, color, SKU, price, and category. These attributes are essential for ensuring accurate product representation across various platforms, including ERP systems and e-commerce stores.

Each connector—whether it's linked to an ERP like Apparel21 or SAP B1, or an e-commerce platform like Shopify or BigCommerce—may have its own set of required and optional attributes. Proper configuration of these attributes ensures that data is correctly mapped and synchronized between systems, supporting consistent product listings, streamlined inventory management, and seamless order processing.

A detailed breakdown of product attributes required for each connector is provided in the following document:

[🔗 Product Attributes Documentation](https://fishead-my.sharepoint.com/:w:/g/personal/swetha_s_zimble_io/EemevlTC__JIhPs6AUTpQ6YBS2RPfzNnAjFC05h-_VW7UA?e=weAikG)

## 5. Recipes :
Recipes, a secondary menu option under Connect, are categorized as follows:

**Product Recipe:** Created by selecting a source and destination, with a mapping list provided by the development team based on client needs. Source attributes map to destination attributes, and users can input text, formulas, or HTML for transformations. 

**Stock Recipe:** Similar to the Product Recipe, it maps warehouses from source to destination as per client requirements. 

**Order Recipe:**  Created by selecting the destination on the left and source on the right, mapping shipping methods and taxes based on client preferences. 

**Customer Recipes:**  Source attributes map to destination attributes, ensuring consistency of customer names. 

**Price List:**  Not mandatory for each client, it checks for available price lists. 