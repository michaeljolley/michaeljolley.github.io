---
layout: post
date: 2019-11-24 01:00
title: "Environment variables in Azure Functions with Key Vault"
image: https://user-images.githubusercontent.com/1228996/69502090-f4b96a80-0ed0-11ea-95fd-8c51ac152b14.png
description: Accessing environment variables from your Azure Key Vault is simple for normal Azure App Services, but a little more involved for Azure Function App Services.
comments: true
tags: [azure, key-vault, function, environment, app-service, variable]
---

Recently, while working a project that utilized a mixture of Azure App Services and Functions, I had the need to utilize environment variables. Having read about Azure Key Vault, I knew that it probably held all the answers (or secrets.)

Some quick Google-Fu later and my Node.js apps running in App Services were accessing environment variables with `process.env.{secret}`. Using this newfound knowledge, and to no avail, I tried to give the same access to my Azure Functions running in App Services.

After much web (and soul) searching, I found the solution and would love to share it for the benefit of future generations.

<!--more-->

### Azure Key Vault

The Azure Key Vault provides a way to store keys and secrets outside of the context of an application. Using access policies, you can allow your applications to access and/or manage the keys within the vault. You can include any secrets, from API keys to connection strings, in your vault.

### Accessing Secrets as Environment Variables

To access Key Vault secrets as environment variables in your Azure App Service, you'll need to setup an Access Policy.

<figure style="width:400px;float:right;margin-left:15px">
    <img src="https://user-images.githubusercontent.com/1228996/69500724-393e0980-0ec3-11ea-8ac5-c859956c3a12.png" />
</figure>

To do this, go to the Identity menu option in your App Service and access the "System assigned" tab.

Set the "Status" control to "On" and press Save. This will register your app service with the Azure Active Directory. Now you can provide an access policy to your Key Vault for that App Service.

<figure style="width:300px;float:right;margin-left:15px">
    <img src="https://user-images.githubusercontent.com/1228996/69500821-2ed03f80-0ec4-11ea-959c-94e540cfa40f.png"/>
</figure>

Open your Key Vault and go to the "Access policies" setting. Once there, click "+ Add Access Policy"

On the Add access policy page, set any permissions for keys, secrets and/or certificates. If you only want secrets added as environment variables, you can simply provide the "Get" permission for "Secret permissions."

<figure style="width:400px;float:right;margin-left:15px">
    <img src="https://user-images.githubusercontent.com/1228996/69501029-82438d00-0ec6-11ea-825d-c346edc624d4.png"/>
</figure>

In the "Select principal" option, search for your App Service's name and select it. Next, press the "Add" button to add the policy and then "Save" on the Access Policies page to commit the changes.

Your App Service can now access your secrets as environment variables.

### Wait!?! My Azure Function's App Service can't see the Environment Variables

Correct. Welcome to the dilemma this post is destined to solve.

The steps above are still required, but additional configuration is needed to access your key vault secrets within your Azure Functions.

First, identify what specific secrets you want your Function App Service to access. Then, find that secret in your key vault and copy its Secret Identifier. It will look similar to `https://myvault.vault.azure.net/secrets/MYVARIABLE/SECRETKEYHERE`.

### Configuring AppSettings to Access Key Vault Secrets

In your Function App Service, click on "Configuration" and add a new application setting. Give it the name you want to access as an environment variable. In the "value" field, enter the following:

```
@Microsoft.KeyVault(SecretUri={SECRET IDENTIFIER URL FROM KEY VAULT})
```

Finally, press "OK" and "Save" to commit the new setting.

You can now access that secret as an environment variable from within your Azure Function.

### Wrap it up

Hopefully this quick walk-through helps save you time in the future when trying fight this battle yourself.
