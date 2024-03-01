---
title: 'Problems with PubNub: A Deep Dive into Chat System Challenges'
date: '2024-02-25'
tags: ['Tech', 'PubNub', 'Chat']
draft: false
summary: In our client's project, we were tasked with developing a comprehensive chat module. The requirements included functionalities such as one-to-one, group, and community chat, where all users could participate without strict limitations on joining specific chat channels.
---

## Project Requirements:

In our client's project, we were tasked with developing a comprehensive chat module. The requirements included functionalities such as one-to-one, group, and community chat, where all users could participate without strict limitations on joining specific chat channels.

## Architecture Choices:

To meet these requirements, we opted for PubNub as our messaging infrastructure. We structured our system to assign a single PubNub channel for each one-to-one chat. We utilized a single channel for group chats and a separate channel for community discussion groups. Additionally, we implemented PubNub channel groups to simplify subscription management for each user.

## Problem 1: Adding Channels to Channel Groups:

A significant hurdle we encountered was the limitation on the number of channels that can be added to a PubNub channel group. While the maximum limit is set at 2000 channels (PubNub officials recommended a more conservative 1500), surpassing this limit can lead to unpredictable outcomes. If we exceed the maximum channel limit within a PubNub channel group, the system may not generate an error message despite displaying a successful outcome. However, there's a possibility that the operation failed silently, leaving uncertainty about whether the channel was actually added to the group. To ensure accuracy, we must subsequently make an additional call to the PubNub SDK to retrieve a list of registered channels within the channel group. This necessity for a separate verification step adds complexity to the process, highlighting potential shortcomings in the system's reliability.

## Problem 2: Device Token Registration for Push Notifications:

PubNub offers built-in push notification services, which initially seemed promising. However, we faced challenges when registering device tokens for users with numerous chat interactions. Essentially, we're required to input our cloud messaging credentials and other iOS push notification details into the PubNub dashboard for managing push notifications. Once configured, PubNub handles the delivery of push notifications. To activate push notifications for a specific channel, we must supply the device tokens to the corresponding PubNub channel, enabling notifications for any messages received in that channel.

However, a significant challenge arises when dealing with users engaged in multiple chat interactions, including one-to-one, group, and other chats. This results in numerous PubNub channels associated with a single user. Consequently, we're compelled to register multiple PubNub channels for each token of a user separately. Unfortunately, there's no functionality available to simultaneously register multiple channels or a channel group when registering device tokens. Consequently, this leads to excessive backend calls from our system to PubNub servers, impacting system performance and efficiency.

## Problem 3: Channel Manipulations in Device Token Flow:

Handling registered channels for push notifications turned out to be quite challenging. Imagine we've added 2000 channels to one device token. Now, if we want to stop notifications for some channels or remove them altogether, there's a bit of a problem. We can't just take channels off the token directly. Instead, we have to fetch from PubNub which channels are on the token, and then we have to make another call to remove the ones we don't want. Here's the kicker: when we fetch the channels on the token, we only get the first 500. There's no way to get the rest. No pagination—just the first 500, plain and simple.

## Problem 4: PubNub API Constraints:

Another limitation we faced was the payload size restriction of 32KB for PubNub API operations. This constraint posed challenges when sending messages or performing channel manipulations, impacting the scalability of our chat system. Furthermore, encountering errors when making concurrent PubNub calls added complexity and reduced system reliability.

## Conclusion:

While PubNub may suffice for smaller-scale use cases, it falls short when building robust and scalable chat systems. Limitations in channel management, push notification registration, and API constraints hinder the effectiveness of PubNub in complex environments. Improved documentation and logging mechanisms are needed to enhance developer experience and mitigate these challenges. As we navigate these limitations, we explore alternative solutions better suited to meet the demands of our project's scale and complexity.
