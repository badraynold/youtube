#!/bin/bash
export PM2_SERVE_HOST=127.0.0.1
export PM2_SERVE_PORT=4000
pm2 serve -s build --spa
pm2 status
