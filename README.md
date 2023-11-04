![Google Sheets as a Database](https://github.com/ARH-MNAJS/Google-Sheets-as-a-Database/blob/daf732c18e8df529e4c00c447963683e6c66c2ca/Readme%20Image.png)

# Google-Sheets-as-a-Database

## About the Repo
Google Sheets as a Database allows you to store, retrieve, and manipulate data using Google Sheets as the backend storage. This is particularly useful for small to medium-sized projects where a full-fledged database system might be overkill. It's also a convenient option for projects that require collaboration and data sharing within a team.

## Usage

To use Google Sheets as a database, follow these general steps:

1. Create a Google Sheets document: Set up a Google Sheets document and define the structure of your database with columns for different data attributes

2. Go to Extensions>Appscripts and create the files name.gs and scripter.gs Google Script(.gs) files

3. Update your sheet name and column names in script

4. Test the scripts for any errors by running it once and then deploy it to obtain a Google Script Link

5. Use the script links by accessing them using Axios or any other API handler (A sample of the implementation is demonstrated in sample.html)
