# Release Testing Tracker - User Guide

## Overview
The Release Testing Tracker is a comprehensive web application for managing and tracking test cases across multiple release candidates (RC1-RC6) for FortiAuthenticator and FortiGate products.

## Key Features

### 1. **View and Filter Test Cases**
- **Search**: Use the search box to find test cases by keyword
- **Category Filter**: Filter by product category (FortiAuthenticator, Fortigate, etc.)
- **Owner Filter**: Filter by team member (Nirmal, Shubo, Priya, Kevin)
- **RC Filter**: View test cases for specific release candidates
- **Status Filter**: Filter by Pass/Fail/Pending status
- **Apply Filters**: Click "Apply Filters" to update the view
- **Clear All**: Reset all filters to view all test cases

### 2. **Add New Test Cases**
1. Click the **"➕ Add Test Case"** button
2. Fill in the form:
   - **Category**: Select product category
   - **Task Name**: Describe the test case
   - **Owner**: Assign to a team member
   - **RC Status**: Set Pass/Fail for each release candidate
   - **Mantis Bug IDs**: Enter bug IDs for failures (comma-separated)
   - **Notes**: Add any additional information
3. Click **"Add Test Case"** to save

### 3. **Edit Existing Test Cases**
1. Click the **"✏️ Edit"** button on any row
2. Modify the information as needed
3. Click **"Save Changes"** to update

### 4. **Upload Test Cases via CSV**

#### Uploading CSV Files
1. Click the **"📤 Upload CSV"** button
2. Select your CSV file
3. Review the preview of test cases to be imported
4. Click **"✓ Confirm Import"** to add them to the tracker

#### CSV Format Requirements
Your CSV file must have these columns in order:
```
Category,Task,Owner,RC1,RC2,RC3,RC4,RC5,RC6,Mantis,Notes
```

#### Example CSV Row
```csv
Fortigate,User MFA with Email,Shubo,pass,pass,pass,pass,pass,pass,,Sample note
FIC Admin Portal,Customer search,Nirmal,fail,pass,pass,pass,,,1229677,Bug fixed in RC2
```

#### Important CSV Rules
- **RC Columns**: Use `pass`, `fail`, or leave empty (not tested)
- **Mantis IDs**: Use semicolons (`;`) to separate multiple IDs in CSV: `1206493;1209255`
  - The system will automatically convert them to commas
- **Text with Commas**: Wrap in quotes: `"This is a task, with comma"`
- **Notes**: Optional field for additional context

#### Download Template
Click **"⬇️ Download CSV Template"** in the upload modal to get a properly formatted template file.

### 5. **Export Data**
Click the **"💾 Export"** button to download all current test data as CSV, including:
- All test case information
- Mantis bug IDs
- Notes and comments
- Current RC status

### 6. **AI Analysis**
Click the **"🤖 AI Analysis"** button to view:
- Overall test health and pass rate
- Release candidate progression analysis
- Categories requiring attention
- Team performance metrics
- Automated recommendations

### 7. **View History**
Click the **"📊 History"** button to see:
- Timeline of all release candidates
- Key improvements in each RC
- Known issues and resolutions
- Testing progression over time

### 8. **Mantis Integration**
- Failed test cases display Mantis bug links (🐛 icon)
- Click any Mantis link to open the bug report
- Multiple bugs per test case are supported
- Links open in new tab for easy reference

### 9. **Statistics Dashboard**
The stats panel shows:
- **Total Tests**: Number of test cases
- **Pass Rate**: Percentage of passing tests
- **Total Passed**: Count of passed tests
- **Total Failed**: Count of failed tests
- **Categories**: Number of distinct categories
- **Owners**: Number of team members

## Tips and Best Practices

### Organization
- Use consistent category names
- Assign clear, descriptive task names
- Keep notes concise but informative
- Update RC status promptly after testing

### Mantis Bug Tracking
- Always link failed tests to Mantis bugs
- Use semicolons in CSV files for multiple bugs
- Update bug IDs when bugs are reopened
- Add context in notes about bug resolution

### CSV Import Tips
- Download the template first to ensure correct format
- Test with a small CSV file before bulk import
- Review the preview carefully before confirming
- Keep a backup of your CSV files

### Filtering and Search
- Combine multiple filters for precise results
- Use search for quick keyword lookup
- Filter by RC to track progression
- Filter by status to identify problem areas

### Data Management
- Export data regularly for backup
- Review statistics periodically
- Use AI Analysis for insights
- Keep test cases up to date

## Common Workflows

### Adding Test Results from a New RC
1. Filter by the RC you're testing
2. For each test case, click Edit
3. Update the RC status (pass/fail)
4. If failed, add Mantis bug ID
5. Add notes with any relevant details
6. Save changes

### Bulk Import from Testing Session
1. Create CSV with all test results
2. Use format: Category, Task, Owner, RC1-RC6, Mantis, Notes
3. Click Upload CSV
4. Review preview
5. Confirm import

### Tracking Bug Resolution
1. Filter by Status = "fail"
2. Review Mantis links for each failure
3. Update RC status when bugs are fixed
4. Add notes about resolution
5. Monitor pass rate improvement

### Generating Reports
1. Apply desired filters (e.g., specific RC)
2. Review AI Analysis for insights
3. Export filtered data to CSV
4. Use exported data in external reports

## Troubleshooting

### CSV Upload Issues
- **No data imported**: Check CSV format matches template
- **Missing columns**: Ensure all 11 columns are present
- **Text cutoff**: Wrap text with commas in quotes
- **Mantis IDs not showing**: Use semicolons in CSV, commas in manual entry

### Filter Not Working
- Click "Apply Filters" after selecting options
- Check if filters are too restrictive
- Use "Clear All" to reset and try again

### Data Not Saving
- Ensure all required fields are filled
- Check browser console for errors
- Refresh page and try again

## Keyboard Shortcuts
- **Escape**: Close any open modal
- **Enter**: Submit forms (when focused on form elements)

## Data Persistence
**Important**: This is a client-side application. Data is stored in memory during your session only. To preserve your data:
- Export to CSV regularly
- Keep backups of CSV files
- Re-import CSV when needed

## Support and Feedback
For issues or feature requests, contact your development team or create a ticket in your issue tracking system.

---

**Version**: 1.0  
**Last Updated**: November 2024
