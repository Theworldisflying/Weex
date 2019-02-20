#!/usr/bin/env bash

mv ./android/build.gradle ../local.gradle
mv ../rn-publish.gradle ./android/build.gradle

npm publish

mv ./android/build.gradle ../rn-publish.gradle
mv ../local.gradle ./android/build.gradle
