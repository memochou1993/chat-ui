#!/bin/bash

yarn build
rsync -av --delete-after build/ root@0.0.0.0:/var/www/chat-client/public
