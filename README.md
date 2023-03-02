# formidable : Google Forms Creator

This Google Apps Script automates the creation of a Google Form from a Google Spreadsheet. With just a few clicks, you can easily turn your spreadsheet questions into a fully functioning Google Form.

## Getting Started

### Prerequisites

In order to use this script, you will need:

- A Google account
- A Google Spreadsheet containing your questions
- Google Apps Script (which is built into Google Drive)

### Installation

1. Open your Google Spreadsheet.
2. Click on "Tools" > "Script editor" to open the Google Apps Script editor.
3. Copy and paste the contents of the `formidable.gs` file into the editor.
4. Save the script and give it a name.

## Usage

1. Open your Google Apps Script editor.
2. Replace 'SPREADSHEET_ID' with the ID of the spreadsheet containing your questions, and 'Sheet1' with the name of your sheet.
3. Launch the script formidable.gs
4. The new form url is available in the log.

## Customizing Your Questions

The script currently supports the following question types:

- Scale items

To customize your questions, simply edit the contents of your spreadsheet. The first column should contain the question text.

## Contributing

If you find any bugs or issues with this script, feel free to submit an issue or pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
