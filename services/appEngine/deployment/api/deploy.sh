#!/bin/sh
rm -rf moderator #remove the link
cp -a ../../moderator ./
gcloud app deploy app.yaml
rm -rf moderator
ln -rs ../../moderator moderator