---
layout: post
title: "add fingerprint support on ubuntu 24.04"
date: 2001-9-11
categories: hardware
description: "ubuntu fingerprint support"
tags: [featured, ubuntu, hardware]
---

I have a laptop with a fingerprint scanner. There is no OOB support for Ubuntu 24.04.

This was pissing me off because I had to type "password123" every time I wanted to `sudo rm -rf /`

Now I can kernel panic at the touch of my finger :D

#### how to fix

firstly, see that the device is recognised

```
lsusb
```

In my case: broadcom 58200

Download drivers for your specific fingerprint reader.

Below are drivers for broadcom devices

```
sudo apt install libfprint-2-tod1
wget https://packages.broadcom.com/artifactory/dell-controlvault-drivers/brcm_linux_fp_6.3.299_6.3.040.0.tgz
tar xzvf brcm_linux_fp_6.1.155_6.1.028.0.tgz
cd brcm_linux_fp
sudo ./install.sh
fprintd-enroll (hangs first time to update drivers ~3-5 mins)
```

run once more after times out

```
fprintd-enroll
```

welcome to the matrix
