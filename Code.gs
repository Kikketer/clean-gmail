function wipeCrapEmails() {
  const delayDays = 2; // will only impact emails more than 48h old
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - delayDays); // what was the date at that time?

  // Get ALL the emails you have (keep your inbox clean!)
  const testUserThreads = GmailApp.getInboxThreads();
  const githubSpam = GmailApp.getUserLabelByName("Github Spam");
  const jiraSpam = GmailApp.getUserLabelByName("JIRA Spam");
  const sentrySpam = GmailApp.getUserLabelByName("Sentry");
  const testUserLabel = GmailApp.getUserLabelByName('Test Users');
  var garbageThreads = [...githubSpam.getThreads(0, 400), ...jiraSpam.getThreads(0,400), ...sentrySpam.getThreads(0, 400)];
  
  // we archive all the threads if they're unread AND older than the limit we set in delayDays
  testUserThreads.forEach((thread) => {
    // Get each message within a thread
    const messages = thread.getMessages();
    messages.forEach((message) => {
      if(message.getTo().match(/christopher\.weed\+(.*)@castingnetworks\.com/)) {
        // This is a "+" message, no matter what add the Test User label:
        thread.addLabel(testUserLabel);
      }
    })
  })
  
  garbageThreads.concat(testUserThreads).forEach((thread) => {
    if(thread.getLastMessageDate().getTime() < cutoffDate.getTime()) {
      thread.moveToTrash()
    }
  })
}
