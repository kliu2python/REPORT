export const testDataInitial = [
  // FortiAuthenticator
  { category: 'FortiAuthenticator', task: 'user create in FAC- User synch to FIC', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '', notes: '' },
  { category: 'FortiAuthenticator', task: 'FAC User MFA with Email', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'FortiAuthenticator', task: 'FAC User MFA with FTM', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: '', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'FortiAuthenticator', task: 'FAC User MFA with SMS', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'FortiAuthenticator', task: 'FAC user from LDAP', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '', notes: '' },
  { category: 'FortiAuthenticator', task: 'username sensitivity', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: '', rc4: '', rc5: '', rc6: '', mantis: '', notes: '' },

  // FortiAuthenticator HA
  { category: 'FortiAuthenticator HA', task: 'user create in FAC- User synch to FIC', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '', notes: '' },
  { category: 'FortiAuthenticator HA', task: 'FAC User MFA with Email', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'FortiAuthenticator HA', task: 'FAC User MFA with FTM', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'FortiAuthenticator HA', task: 'FAC User MFA with SMS', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '', notes: '' },

  // FIC Admin Portal
  { category: 'FIC Admin Portal', task: 'Admin Portal GUI - Customer search', owner: 'Nirmal', rc1: 'fail', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '1229677', notes: 'Bug encountered one time only, not reproducible in later RCs' },
  { category: 'FIC Admin Portal', task: 'Admin Portal GUI - all customer GUI access', owner: 'Nirmal', rc1: 'fail', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '1229677', notes: 'Fixed after RC1' },
  { category: 'FIC Admin Portal', task: 'Admin portal Kibana Access', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'FIC Admin Portal', task: 'Admin portal Email templates verification', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'FIC Admin Portal', task: 'Admin portal 2FA authentication', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },

  // FIC Regression Mantis
  { category: 'FIC Regression Mantis', task: 'When switching to another authentication method on IdP proxy page, FTM Push is still being accepted', owner: 'Nirmal', rc1: 'fail', rc2: 'fail', rc3: 'fail', rc4: 'fail', rc5: 'fail', rc6: 'pass', mantis: '1184581', notes: 'Fixed in RC6' },
  { category: 'FIC Regression Mantis', task: 'Landing on FIC & EUFIC have an empty white when you minimize the browser', owner: 'Nirmal', rc1: 'fail', rc2: 'fail', rc3: 'fail', rc4: 'pass', rc5: '', rc6: '', mantis: '1187657', notes: 'Fixed in RC4' },
  { category: 'FIC Regression Mantis', task: 'Email Verification send for user auth to end-user portal context miss leading', owner: 'Nirmal', rc1: 'fail', rc2: 'fail', rc3: 'fail', rc4: 'fail', rc5: 'fail', rc6: 'pass', mantis: '1168628', notes: 'Fixed in RC6' },
  { category: 'FIC Regression Mantis', task: 'FIC portal some of the pages doesn\'t get "highlighted" if the context is not displayed', owner: 'Nirmal', rc1: 'fail', rc2: 'fail', rc3: 'fail', rc4: 'fail', rc5: 'fail', rc6: 'fail', mantis: '1211744', notes: 'Reopened - still under investigation' },
  { category: 'FIC Regression Mantis', task: 'Switch the FTM auth method notification via SMS results in ERROR', owner: 'Nirmal', rc1: 'fail', rc2: 'fail', rc3: 'fail', rc4: 'fail', rc5: 'fail', rc6: 'pass', mantis: '1261647', notes: 'Not reproducible in RC6' },

  // Fortitoken
  { category: 'Fortitoken', task: 'Importting new FTK210 into FIC', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'Fortitoken', task: 'Bulk import of FTK210 into FIC', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'Fortitoken', task: 'User auth FT210 for the end-user portal', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },
  { category: 'Fortitoken', task: 'User auth for FGT using the FTK210', owner: 'Nirmal', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: '', mantis: '', notes: '' },

  // Fortigate
  { category: 'Fortigate', task: 'user create in Fortigate - User synch to FIC', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: 'Tested with FOS 7.4.9 GA and 8.0.0 beta' },
  { category: 'Fortigate', task: 'Fortigate User MFA with Email', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },
  { category: 'Fortigate', task: 'Fortigate User MFA with FTM', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },
  { category: 'Fortigate', task: 'Fortigate User MFA with SMS', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },
  { category: 'Fortigate', task: 'Fortigate user from LDAP', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },
  { category: 'Fortigate', task: 'SSL VPN users with web access', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },
  { category: 'Fortigate', task: 'IPSEC VPN users with Forticlient', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },

  // Fortigate HA
  { category: 'Fortigate HA', task: 'user create in Fortigate - User synch to FIC', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },
  { category: 'Fortigate HA', task: 'Fortigate User MFA with Email', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },
  { category: 'Fortigate HA', task: 'Fortigate User MFA with FTM', owner: 'Shubo', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },

  // Priya's tests
  { category: 'SCIM', task: 'Auth Proxy', owner: 'Priya', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '', notes: '' },
  { category: 'SCIM', task: 'SCIM Okta Add/mod/Del', owner: 'Priya', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '', notes: '' },
  { category: 'SCIM', task: 'SCIM Azure integration', owner: 'Priya', rc1: '', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '', notes: 'Azure integration with user assignment and provisioning' },
  { category: 'SCIM', task: 'Management app', owner: 'Priya', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: '', rc6: '', mantis: '', notes: 'Trial user can add up to 2 apps' },

  // Kevin's tests
  { category: 'Sub User', task: 'Azure SAML', owner: 'Kevin', rc1: 'fail', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '1206493', notes: 'S3 Bug fixed after RC1' },
  { category: 'Sub User', task: 'Azure SAML FIDO Key', owner: 'Kevin', rc1: 'fail', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '1206493', notes: '' },
  { category: 'Sub User', task: 'Azure OIDC', owner: 'Kevin', rc1: 'fail', rc2: 'fail', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '1206493,1209255', notes: 'Multiple bugs fixed across RC2-RC3' },
  { category: 'Sub User', task: 'Google SAML', owner: 'Kevin', rc1: 'fail', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '1206493', notes: '' },
  { category: 'Sub User', task: 'Local IDP (SMS, Email, NO FTM)', owner: 'Kevin', rc1: 'fail', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '1206493', notes: '' },
  { category: 'Sub User', task: 'Security: HTTP Headers and CSP Headers', owner: 'Kevin', rc1: 'pass', rc2: 'pass', rc3: 'pass', rc4: 'pass', rc5: 'pass', rc6: 'pass', mantis: '', notes: '' },
  { category: 'Sub User', task: 'Security: XSS and SQL Injection Testing', owner: 'Kevin', rc1: 'fail', rc2: 'fail', rc3: 'fail', rc4: 'fail', rc5: 'fail', rc6: 'fail', mantis: '1215630,1215614,1221642,1220967', notes: 'Multiple security issues under remediation' },
  { category: 'Sub User', task: 'Bypass MFA for Login From Known Device', owner: 'Kevin', rc1: '', rc2: '', rc3: '', rc4: 'fail', rc5: 'fail', rc6: '', mantis: '1227617', notes: 'New feature testing started in RC4' },
]

export const aiUsageLog = [
  { user: 'qa.lead@example.com', task: 'Generate RC6 summary', rc: 'RC6', tokens: 4200, cost: 0.11, latencyMs: 1200 },
  { user: 'qa.lead@example.com', task: 'Generate RC5 summary', rc: 'RC5', tokens: 3800, cost: 0.10, latencyMs: 1250 },
  { user: 'qa.reviewer@example.com', task: 'Explain failing tests', rc: 'RC6', tokens: 1800, cost: 0.05, latencyMs: 980 },
  { user: 'dev.manager@example.com', task: 'Risk brief', rc: 'RC6', tokens: 2400, cost: 0.07, latencyMs: 1100 },
]

export const authTelemetry = {
  verifiedUsers: 48,
  activeSessions: 93,
  lockouts: 1,
}
