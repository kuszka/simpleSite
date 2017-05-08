#!/usr/bin/env bash
wget --no-check-certificate $1 -P ./repos/
tar -zxvf ./repos/$2