#!/bin/bash

# helper script for running in eclipse che environment with huginn
# redirect internally recognized huginn hostname to port 9001

socat TCP-LISTEN:9001,reuseaddr,fork,su=nobody TCP:huginn:9000
