# clean-gmail
A highly specific script to keep my gmail clean

I currently have 3 built in "filters" (Google uses labels) to categorize Senty, JIRA and Github spam.  This script will clean out any email that's older than 2 days with these labels.

The real fun is it will also clean out any email that has been sent to an address with `+anything` on it as well after two days.  This allows me to use my gmail address for various test emails and such when developing.

## To Use:

Simply go to the [https://script.google.com/](https://script.google.com/) site and start a new project.  
Copy/paste this code and hit run. You will have to authorize the script to read your emails (and delete things, scary so make sure you really read and understand the code!)
