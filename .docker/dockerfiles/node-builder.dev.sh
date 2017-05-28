#!/usr/bin/env bash

echo "Cleaning cache"
npm cache clean
echo "Updating node_modules"
npm install
echo "Running Dev Environment"
npm run watch
