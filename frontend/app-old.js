// Test data extracted from the PDF
        const testData = [
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
        ];

        // AI usage telemetry - lightweight sample data for the dashboard
        const aiUsageLog = [
            { user: 'qa.lead@example.com', task: 'Generate RC6 summary', rc: 'RC6', tokens: 4200, cost: 0.11, latencyMs: 1200 },
            { user: 'qa.lead@example.com', task: 'Generate RC5 summary', rc: 'RC5', tokens: 3800, cost: 0.10, latencyMs: 1250 },
            { user: 'qa.reviewer@example.com', task: 'Explain failing tests', rc: 'RC6', tokens: 1800, cost: 0.05, latencyMs: 980 },
            { user: 'dev.manager@example.com', task: 'Risk brief', rc: 'RC6', tokens: 2400, cost: 0.07, latencyMs: 1100 },
        ];

        // Authentication readiness snapshot
        const authTelemetry = {
            verifiedUsers: 48,
            activeSessions: 93,
            lockouts: 1,
        };

        let filteredData = [...testData];
        let currentSort = { column: null, direction: 'asc' };

        // Initialize the application
        function init() {
            renderTable();
            updateStats();
            setupEventListeners();
        }

        // Render the table
        function renderTable(data = filteredData) {
            const tbody = document.getElementById('tableBody');
            tbody.innerHTML = '';

            if (data.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="10">
                            <div class="empty-state">
                                <div class="empty-state-icon">🔍</div>
                                <h3>No results found</h3>
                                <p>Try adjusting your filters or search criteria</p>
                            </div>
                        </td>
                    </tr>
                `;
                document.getElementById('resultCount').textContent = '0';
                return;
            }

            data.forEach((row, index) => {
                // Find original index in testData
                const originalIndex = testData.findIndex(item => 
                    item.category === row.category && 
                    item.task === row.task && 
                    item.owner === row.owner
                );

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${row.category}</strong></td>
                    <td>
                        ${row.task}
                        ${row.notes ? `<div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">📝 ${row.notes}</div>` : ''}
                    </td>
                    <td><span style="color: var(--accent-primary);">${row.owner}</span></td>
                    <td>${getStatusBadge(row.rc1, row.mantis)}</td>
                    <td>${getStatusBadge(row.rc2, row.mantis)}</td>
                    <td>${getStatusBadge(row.rc3, row.mantis)}</td>
                    <td>${getStatusBadge(row.rc4, row.mantis)}</td>
                    <td>${getStatusBadge(row.rc5, row.mantis)}</td>
                    <td>${getStatusBadge(row.rc6, row.mantis)}</td>
                    <td>
                        <button class="action-btn" onclick="editTestCase(${originalIndex})">✏️ Edit</button>
                        ${row.mantis ? getMantisLinks(row.mantis) : ''}
                    </td>
                `;
                tbody.appendChild(tr);
            });

            document.getElementById('resultCount').textContent = data.length;
        }

        // Get Mantis links HTML
        function getMantisLinks(mantisIds) {
            if (!mantisIds) return '';
            const ids = mantisIds.split(',').map(id => id.trim());
            return ids.map(id => 
                `<a href="https://mantis.fortinet.com/bug_view_page.php?bug_id=${id}" 
                    target="_blank" 
                    class="mantis-link" 
                    title="View Mantis Bug ${id}">🐛 ${id}</a>`
            ).join('');
        }

        // Get status badge HTML
        function getStatusBadge(status) {
            if (!status) return '<span class="badge badge-pending">—</span>';
            
            const normalizedStatus = status.toLowerCase();
            if (normalizedStatus.includes('pass')) {
                return '<span class="badge badge-pass">Pass</span>';
            } else if (normalizedStatus.includes('fail')) {
                return '<span class="badge badge-fail">Fail</span>';
            } else {
                return '<span class="badge badge-pending">Pending</span>';
            }
        }

        // Update statistics
        function updateStats() {
            const stats = calculateStats(filteredData);
            const statsGrid = document.getElementById('statsGrid');

            statsGrid.innerHTML = `
                <div class="stat-card">
                    <div class="stat-label">Total Tests</div>
                    <div class="stat-value" style="color: var(--accent-primary);">${stats.total}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Pass Rate</div>
                    <div class="stat-value" style="color: var(--success);">${stats.passRate}%</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${stats.passRate}%;"></div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Total Passed</div>
                    <div class="stat-value" style="color: var(--success);">${stats.passed}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Total Failed</div>
                    <div class="stat-value" style="color: var(--danger);">${stats.failed}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Categories</div>
                    <div class="stat-value" style="color: var(--accent-secondary);">${stats.categories}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Owners</div>
                    <div class="stat-value" style="color: var(--accent-tertiary);">${stats.owners}</div>
                </div>
            `;

            renderOverview(stats);
        }

        // Calculate statistics
        function calculateStats(data) {
            const rcColumns = ['rc1', 'rc2', 'rc3', 'rc4', 'rc5', 'rc6'];
            let passed = 0;
            let failed = 0;
            let total = 0;

            data.forEach(row => {
                rcColumns.forEach(rc => {
                    if (row[rc]) {
                        total++;
                        if (row[rc].toLowerCase().includes('pass')) {
                            passed++;
                        } else if (row[rc].toLowerCase().includes('fail')) {
                            failed++;
                        }
                    }
                });
            });

            const passRate = total > 0 ? Math.round((passed / total) * 100) : 0;
            const categories = new Set(data.map(row => row.category)).size;
            const owners = new Set(data.map(row => row.owner)).size;

            return { total: data.length, passed, failed, passRate, categories, owners };
        }

        // Render executive overview metrics
        function renderOverview(stats) {
            const aiSummary = summarizeAiUsage(aiUsageLog);

            document.getElementById('overviewPassRate').textContent = `${stats.passRate}%`;
            document.getElementById('overviewTotalScenarios').textContent = stats.total;
            document.getElementById('overviewOwners').textContent = stats.owners;

            document.getElementById('overviewAiCalls').textContent = aiSummary.calls;
            document.getElementById('overviewAiLatency').textContent = `${aiSummary.avgLatency}s`;
            document.getElementById('overviewAiTokens').textContent = `${aiSummary.tokensK}k`;

            document.getElementById('overviewUsers').textContent = authTelemetry.verifiedUsers;
            document.getElementById('overviewSessions').textContent = authTelemetry.activeSessions;
            document.getElementById('overviewLockouts').textContent = authTelemetry.lockouts;
        }

        function summarizeAiUsage(logs) {
            if (!logs.length) {
                return { calls: 0, avgLatency: '0.0', tokensK: 0 };
            }

            const calls = logs.length;
            const totalLatency = logs.reduce((sum, log) => sum + log.latencyMs, 0);
            const totalTokens = logs.reduce((sum, log) => sum + log.tokens, 0);

            return {
                calls,
                avgLatency: (totalLatency / calls / 1000).toFixed(1),
                tokensK: Math.round(totalTokens / 100) / 10,
            };
        }

        // Apply filters
        function applyFilters() {
            const search = document.getElementById('search').value.toLowerCase();
            const category = document.getElementById('filterCategory').value;
            const owner = document.getElementById('filterOwner').value;
            const rc = document.getElementById('filterRC').value;
            const status = document.getElementById('filterStatus').value;

            filteredData = testData.filter(row => {
                const matchesSearch = !search || 
                    row.task.toLowerCase().includes(search) ||
                    row.category.toLowerCase().includes(search) ||
                    row.owner.toLowerCase().includes(search);
                
                const matchesCategory = !category || row.category === category;
                const matchesOwner = !owner || row.owner === owner;
                
                let matchesRC = true;
                if (rc) {
                    const rcKey = rc.toLowerCase();
                    matchesRC = row[rcKey] !== '';
                }

                let matchesStatus = true;
                if (status) {
                    const rcColumns = ['rc1', 'rc2', 'rc3', 'rc4', 'rc5', 'rc6'];
                    matchesStatus = rcColumns.some(rcCol => 
                        row[rcCol].toLowerCase().includes(status)
                    );
                }

                return matchesSearch && matchesCategory && matchesOwner && matchesRC && matchesStatus;
            });

            renderTable();
            updateStats();
            updateActiveFilters();
        }

        // Clear all filters
        function clearFilters() {
            document.getElementById('search').value = '';
            document.getElementById('filterCategory').value = '';
            document.getElementById('filterOwner').value = '';
            document.getElementById('filterRC').value = '';
            document.getElementById('filterStatus').value = '';
            
            filteredData = [...testData];
            renderTable();
            updateStats();
            updateActiveFilters();
        }

        // Update active filters display
        function updateActiveFilters() {
            const container = document.getElementById('activeFilters');
            const filters = [];

            const search = document.getElementById('search').value;
            const category = document.getElementById('filterCategory').value;
            const owner = document.getElementById('filterOwner').value;
            const rc = document.getElementById('filterRC').value;
            const status = document.getElementById('filterStatus').value;

            if (search) filters.push({ label: `Search: "${search}"`, type: 'search' });
            if (category) filters.push({ label: `Category: ${category}`, type: 'category' });
            if (owner) filters.push({ label: `Owner: ${owner}`, type: 'owner' });
            if (rc) filters.push({ label: `RC: ${rc}`, type: 'rc' });
            if (status) filters.push({ label: `Status: ${status}`, type: 'status' });

            if (filters.length === 0) {
                container.innerHTML = '';
                return;
            }

            container.innerHTML = filters.map(filter => `
                <span class="filter-tag">
                    ${filter.label}
                    <button onclick="removeFilter('${filter.type}')">×</button>
                </span>
            `).join('');
        }

        // Remove individual filter
        function removeFilter(type) {
            const filterMap = {
                'search': 'search',
                'category': 'filterCategory',
                'owner': 'filterOwner',
                'rc': 'filterRC',
                'status': 'filterStatus'
            };
            
            document.getElementById(filterMap[type]).value = '';
            applyFilters();
        }

        // Open AI Analysis Modal
        function openAIAnalysis() {
            const modal = document.getElementById('aiModal');
            modal.classList.add('active');
            
            // Simulate AI analysis
            setTimeout(() => {
                const analysis = generateAIAnalysis();
                document.getElementById('aiContent').innerHTML = analysis;
            }, 1500);
        }

        // Generate AI Analysis
        function generateAIAnalysis() {
            const stats = calculateStats(filteredData);
            const rcColumns = ['rc1', 'rc2', 'rc3', 'rc4', 'rc5', 'rc6'];
            
            // Calculate RC progression
            const rcStats = {};
            rcColumns.forEach(rc => {
                let passed = 0;
                let failed = 0;
                filteredData.forEach(row => {
                    if (row[rc]) {
                        if (row[rc].toLowerCase().includes('pass')) passed++;
                        else if (row[rc].toLowerCase().includes('fail')) failed++;
                    }
                });
                rcStats[rc] = { passed, failed, total: passed + failed };
            });

            // Find problematic areas
            const categoryFailures = {};
            filteredData.forEach(row => {
                rcColumns.forEach(rc => {
                    if (row[rc] && row[rc].toLowerCase().includes('fail')) {
                        categoryFailures[row.category] = (categoryFailures[row.category] || 0) + 1;
                    }
                });
            });

            const topIssues = Object.entries(categoryFailures)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3);

            return `
                <div class="ai-analysis">
                    <h3 style="color: var(--accent-secondary); margin-bottom: 20px;">📊 Test Coverage Analysis</h3>
                    
                    <div class="ai-insight">
                        <h3>Overall Health</h3>
                        <p>The current release shows a <strong>${stats.passRate}%</strong> pass rate across all test cases. 
                        This ${stats.passRate >= 90 ? 'excellent' : stats.passRate >= 75 ? 'good' : 'needs attention'} 
                        performance indicates ${stats.passRate >= 90 ? 'strong' : 'moderate'} release readiness.</p>
                    </div>

                    <div class="ai-insight">
                        <h3>Release Candidate Progression</h3>
                        <p>Analysis of test progression across RCs:</p>
                        <ul style="list-style: none; padding: 0;">
                            ${rcColumns.map(rc => {
                                const stat = rcStats[rc];
                                if (stat.total === 0) return '';
                                const rate = Math.round((stat.passed / stat.total) * 100);
                                return `
                                    <li style="margin: 10px 0; padding: 10px; background: var(--bg-tertiary); border-radius: 8px;">
                                        <strong>${rc.toUpperCase()}</strong>: ${stat.passed}/${stat.total} passed (${rate}%)
                                        <div class="progress-bar" style="margin-top: 5px;">
                                            <div class="progress-fill" style="width: ${rate}%;"></div>
                                        </div>
                                    </li>
                                `;
                            }).join('')}
                        </ul>
                    </div>

                    ${topIssues.length > 0 ? `
                        <div class="ai-insight">
                            <h3>Areas Requiring Attention</h3>
                            <p>Categories with the most failures:</p>
                            <ul style="list-style: none; padding: 0;">
                                ${topIssues.map(([category, count]) => `
                                    <li style="margin: 8px 0; color: var(--danger);">
                                        • <strong>${category}</strong>: ${count} failure(s)
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    <div class="ai-insight">
                        <h3>Team Performance</h3>
                        <p>Testing is distributed across ${stats.owners} team members covering ${stats.categories} different categories. 
                        This distributed approach ensures comprehensive coverage and diverse perspectives in quality assurance.</p>
                    </div>

                    <div class="ai-insight">
                        <h3>Recommendations</h3>
                        <ul style="line-height: 1.8; color: var(--text-secondary);">
                            ${stats.passRate < 90 ? '<li>Focus on resolving failed test cases before next RC</li>' : ''}
                            ${stats.passRate >= 95 ? '<li>Excellent progress! Consider release candidate for production</li>' : ''}
                            <li>Monitor recurring failures across multiple RCs</li>
                            <li>Ensure all critical path tests are passing</li>
                            <li>Review and update test coverage for edge cases</li>
                        </ul>
                    </div>
                </div>
            `;
        }

        // Open History Modal
        function openHistory() {
            const modal = document.getElementById('historyModal');
            modal.classList.add('active');
            
            const historyContent = `
                <div class="history-timeline">
                    <div class="history-item">
                        <div class="history-date">RC6 - Current</div>
                        <h3 style="color: var(--accent-primary); margin-bottom: 10px;">Release Candidate 6</h3>
                        <p>Latest testing phase with focus on regression fixes and final validation.</p>
                        <div style="margin-top: 15px;">
                            <span class="badge badge-pass">Active</span>
                        </div>
                    </div>
                    
                    <div class="history-item">
                        <div class="history-date">RC5 - Completed</div>
                        <h3 style="color: var(--accent-primary); margin-bottom: 10px;">Release Candidate 5</h3>
                        <p>Addressed critical security vulnerabilities and improved Sub User authentication flows.</p>
                        <div style="margin-top: 10px; color: var(--text-muted); font-size: 0.9rem;">
                            Key improvements: HTTP Headers, CSP Headers, XSS/SQL injection fixes
                        </div>
                    </div>
                    
                    <div class="history-item">
                        <div class="history-date">RC4 - Completed</div>
                        <h3 style="color: var(--accent-primary); margin-bottom: 10px;">Release Candidate 4</h3>
                        <p>Major focus on Admin Portal stability and Management App secret rotation.</p>
                        <div style="margin-top: 10px; color: var(--text-muted); font-size: 0.9rem;">
                            Resolved: Customer search issues, Kibana access, 2FA authentication
                        </div>
                    </div>
                    
                    <div class="history-item">
                        <div class="history-date">RC3 - Completed</div>
                        <h3 style="color: var(--accent-primary); margin-bottom: 10px;">Release Candidate 3</h3>
                        <p>Integration testing with FortiOS 8.0.0 beta and Azure SCIM improvements.</p>
                    </div>
                    
                    <div class="history-item">
                        <div class="history-date">RC2 - Completed</div>
                        <h3 style="color: var(--accent-primary); margin-bottom: 10px;">Release Candidate 2</h3>
                        <p>Initial stability improvements and core functionality validation.</p>
                    </div>
                    
                    <div class="history-item">
                        <div class="history-date">RC1 - Completed</div>
                        <h3 style="color: var(--accent-primary); margin-bottom: 10px;">Release Candidate 1</h3>
                        <p>First release candidate with baseline feature set and initial testing.</p>
                        <div style="margin-top: 10px; color: var(--text-muted); font-size: 0.9rem;">
                            Identified initial issues in Admin Portal and Sub User authentication
                        </div>
                    </div>
                </div>
            `;
            
            document.getElementById('historyContent').innerHTML = historyContent;
        }

        // Close modal
        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Export data
        function exportData() {
            const csv = convertToCSV(filteredData);
            downloadCSV(csv, 'release-testing-data.csv');
            showNotification('Data exported successfully!');
        }

        // Convert data to CSV
        function convertToCSV(data) {
            const headers = ['Category', 'Task', 'Owner', 'RC1', 'RC2', 'RC3', 'RC4', 'RC5', 'RC6', 'Mantis', 'Notes'];
            const rows = data.map(row => [
                row.category,
                `"${row.task.replace(/"/g, '""')}"`, // Escape quotes in task
                row.owner,
                row.rc1,
                row.rc2,
                row.rc3,
                row.rc4,
                row.rc5,
                row.rc6,
                row.mantis || '',
                `"${(row.notes || '').replace(/"/g, '""')}"` // Escape quotes in notes
            ]);
            
            return [headers, ...rows].map(row => row.join(',')).join('\n');
        }

        // Download CSV file
        function downloadCSV(csv, filename) {
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        }

        // Show notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="font-size: 1.5rem;">✓</span>
                    <span>${message}</span>
                </div>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Setup event listeners
        function setupEventListeners() {
            // Search on input
            document.getElementById('search').addEventListener('input', applyFilters);
            
            // Filter changes
            ['filterCategory', 'filterOwner', 'filterRC', 'filterStatus'].forEach(id => {
                document.getElementById(id).addEventListener('change', applyFilters);
            });

            // Table sorting
            document.querySelectorAll('th.sortable').forEach(th => {
                th.addEventListener('click', function() {
                    const column = this.dataset.sort;
                    sortTable(column);
                });
            });

            // Close modals on background click
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.remove('active');
                    }
                });
            });

            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.modal.active').forEach(modal => {
                        modal.classList.remove('active');
                    });
                }
            });
        }

        // Sort table
        function sortTable(column) {
            const direction = currentSort.column === column && currentSort.direction === 'asc' ? 'desc' : 'asc';
            currentSort = { column, direction };

            filteredData.sort((a, b) => {
                let aVal = a[column] || '';
                let bVal = b[column] || '';
                
                if (typeof aVal === 'string') {
                    aVal = aVal.toLowerCase();
                    bVal = bVal.toLowerCase();
                }

                if (direction === 'asc') {
                    return aVal > bVal ? 1 : -1;
                } else {
                    return aVal < bVal ? 1 : -1;
                }
            });

            // Update sort indicators
            document.querySelectorAll('th.sortable').forEach(th => {
                th.classList.remove('sorted-asc', 'sorted-desc');
            });
            
            const sortedTh = document.querySelector(`th[data-sort="${column}"]`);
            sortedTh.classList.add(`sorted-${direction}`);

            renderTable();
        }

        // Edit test case
        function editTestCase(index) {
            const testCase = testData[index];
            
            // Populate form
            document.getElementById('editCategory').value = testCase.category;
            document.getElementById('editTask').value = testCase.task;
            document.getElementById('editOwner').value = testCase.owner;
            document.getElementById('editRC1').value = testCase.rc1;
            document.getElementById('editRC2').value = testCase.rc2;
            document.getElementById('editRC3').value = testCase.rc3;
            document.getElementById('editRC4').value = testCase.rc4;
            document.getElementById('editRC5').value = testCase.rc5;
            document.getElementById('editRC6').value = testCase.rc6;
            document.getElementById('editMantis').value = testCase.mantis || '';
            document.getElementById('editNotes').value = testCase.notes || '';
            document.getElementById('editIndex').value = index;
            
            // Open modal
            document.getElementById('editModal').classList.add('active');
        }

        // Open add test case modal
        function openAddTestCase() {
            // Reset form
            document.getElementById('addForm').reset();
            document.getElementById('addModal').classList.add('active');
        }

        // Add new test case
        function addTestCase(event) {
            event.preventDefault();
            
            const newTestCase = {
                category: document.getElementById('addCategory').value,
                task: document.getElementById('addTask').value,
                owner: document.getElementById('addOwner').value,
                rc1: document.getElementById('addRC1').value,
                rc2: document.getElementById('addRC2').value,
                rc3: document.getElementById('addRC3').value,
                rc4: document.getElementById('addRC4').value,
                rc5: document.getElementById('addRC5').value,
                rc6: document.getElementById('addRC6').value,
                mantis: document.getElementById('addMantis').value,
                notes: document.getElementById('addNotes').value
            };
            
            // Add to test data
            testData.push(newTestCase);
            
            // Refresh filtered data
            applyFilters();
            
            // Close modal
            closeModal('addModal');
            showNotification('Test case added successfully!');
        }

        // Handle CSV file upload
        let pendingCsvData = [];
        
        function handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const text = e.target.result;
                parseCsvData(text);
            };
            reader.readAsText(file);
            
            // Reset file input
            event.target.value = '';
        }

        function parseCsvData(text) {
            const lines = text.split('\n').filter(line => line.trim());
            
            if (lines.length < 2) {
                showNotification('CSV file is empty or invalid!');
                return;
            }
            
            // Skip header row
            const dataLines = lines.slice(1);
            pendingCsvData = [];
            
            dataLines.forEach(line => {
                // Handle CSV parsing - split by comma but respect quoted values
                const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
                const cleanValues = values.map(v => v.replace(/^"|"$/g, '').trim());
                
                if (cleanValues.length >= 3) {
                    const testCase = {
                        category: cleanValues[0] || '',
                        task: cleanValues[1] || '',
                        owner: cleanValues[2] || '',
                        rc1: cleanValues[3] || '',
                        rc2: cleanValues[4] || '',
                        rc3: cleanValues[5] || '',
                        rc4: cleanValues[6] || '',
                        rc5: cleanValues[7] || '',
                        rc6: cleanValues[8] || '',
                        mantis: (cleanValues[9] || '').replace(/;/g, ','), // Convert semicolons to commas
                        notes: cleanValues[10] || ''
                    };
                    
                    pendingCsvData.push(testCase);
                }
            });
            
            if (pendingCsvData.length === 0) {
                showNotification('No valid test cases found in CSV!');
                return;
            }
            
            // Show preview
            showCsvPreview();
            document.getElementById('uploadModal').classList.add('active');
        }

        function showCsvPreview() {
            const previewSection = document.getElementById('csvPreviewSection');
            const previewDiv = document.getElementById('csvPreview');
            
            let html = `
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: var(--bg-tertiary);">
                            <th style="padding: 8px; text-align: left; border-bottom: 1px solid var(--border);">Category</th>
                            <th style="padding: 8px; text-align: left; border-bottom: 1px solid var(--border);">Task</th>
                            <th style="padding: 8px; text-align: left; border-bottom: 1px solid var(--border);">Owner</th>
                            <th style="padding: 8px; text-align: left; border-bottom: 1px solid var(--border);">Status</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            pendingCsvData.slice(0, 10).forEach(row => {
                const statuses = [row.rc1, row.rc2, row.rc3, row.rc4, row.rc5, row.rc6].filter(s => s).length;
                html += `
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 8px;">${row.category}</td>
                        <td style="padding: 8px;">${row.task.substring(0, 50)}${row.task.length > 50 ? '...' : ''}</td>
                        <td style="padding: 8px;">${row.owner}</td>
                        <td style="padding: 8px;">${statuses} RC(s) tested</td>
                    </tr>
                `;
            });
            
            html += `</tbody></table>`;
            
            if (pendingCsvData.length > 10) {
                html += `<p style="margin-top: 12px; font-size: 0.85rem; color: var(--text-muted);">
                    Showing 10 of ${pendingCsvData.length} test cases...
                </p>`;
            }
            
            previewDiv.innerHTML = html;
            previewSection.style.display = 'block';
        }

        function confirmUpload() {
            // Add all CSV data to testData
            testData.push(...pendingCsvData);
            
            // Refresh UI
            applyFilters();
            
            // Close modal
            closeModal('uploadModal');
            
            // Reset
            pendingCsvData = [];
            document.getElementById('csvPreviewSection').style.display = 'none';
            
            showNotification(`Successfully imported ${pendingCsvData.length || testData.length} test cases!`);
        }

        function cancelUpload() {
            pendingCsvData = [];
            document.getElementById('csvPreviewSection').style.display = 'none';
            closeModal('uploadModal');
        }

        // Download CSV template
        function downloadTemplate() {
            const template = `Category,Task,Owner,RC1,RC2,RC3,RC4,RC5,RC6,Mantis,Notes
FortiAuthenticator,Example test case 1,Nirmal,pass,pass,,,,,,"Sample note"
Fortigate,Example test case 2,Shubo,,,,pass,pass,pass,,
FIC Admin Portal,Example test case 3,Kevin,fail,pass,pass,pass,,,1234567,"Bug fixed in RC2"`;
            
            const blob = new Blob([template], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'test_cases_template.csv';
            a.click();
            window.URL.revokeObjectURL(url);
            
            showNotification('Template downloaded successfully!');
        }

        // Generate comprehensive test report
        function generateTestReport() {
            // Open modal and show loading
            document.getElementById('reportModal').classList.add('active');
            document.getElementById('reportGenerating').style.display = 'block';
            document.getElementById('reportContent').style.display = 'none';
            
            // Simulate AI processing
            setTimeout(() => {
                const report = createTestReport();
                document.getElementById('reportBody').innerHTML = report;
                document.getElementById('reportGenerating').style.display = 'none';
                document.getElementById('reportContent').style.display = 'block';
            }, 2000);
        }

        // Create comprehensive test report
        function createTestReport() {
            const stats = calculateStats(filteredData);
            const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            
            // Calculate detailed metrics
            const rcColumns = ['rc1', 'rc2', 'rc3', 'rc4', 'rc5', 'rc6'];
            const rcStats = {};
            
            rcColumns.forEach(rc => {
                let passed = 0;
                let failed = 0;
                let total = 0;
                
                filteredData.forEach(row => {
                    if (row[rc]) {
                        total++;
                        if (row[rc].toLowerCase().includes('pass')) passed++;
                        else if (row[rc].toLowerCase().includes('fail')) failed++;
                    }
                });
                
                rcStats[rc] = { passed, failed, total, rate: total > 0 ? Math.round((passed / total) * 100) : 0 };
            });

            // Category breakdown
            const categoryStats = {};
            filteredData.forEach(row => {
                if (!categoryStats[row.category]) {
                    categoryStats[row.category] = { total: 0, passed: 0, failed: 0 };
                }
                categoryStats[row.category].total++;
                
                rcColumns.forEach(rc => {
                    if (row[rc]) {
                        if (row[rc].toLowerCase().includes('pass')) {
                            categoryStats[row.category].passed++;
                        } else if (row[rc].toLowerCase().includes('fail')) {
                            categoryStats[row.category].failed++;
                        }
                    }
                });
            });

            // Owner/team breakdown
            const ownerStats = {};
            filteredData.forEach(row => {
                if (!ownerStats[row.owner]) {
                    ownerStats[row.owner] = { total: 0, passed: 0, failed: 0 };
                }
                ownerStats[row.owner].total++;
                
                rcColumns.forEach(rc => {
                    if (row[rc]) {
                        if (row[rc].toLowerCase().includes('pass')) {
                            ownerStats[row.owner].passed++;
                        } else if (row[rc].toLowerCase().includes('fail')) {
                            ownerStats[row.owner].failed++;
                        }
                    }
                });
            });

            // Failed test cases with Mantis
            const failedTests = [];
            filteredData.forEach(row => {
                rcColumns.forEach((rc, idx) => {
                    if (row[rc] && row[rc].toLowerCase().includes('fail')) {
                        failedTests.push({
                            category: row.category,
                            task: row.task,
                            rc: `RC${idx + 1}`,
                            mantis: row.mantis,
                            notes: row.notes,
                            owner: row.owner
                        });
                    }
                });
            });

            // Critical issues (failed in multiple RCs)
            const criticalIssues = {};
            filteredData.forEach(row => {
                let failCount = 0;
                rcColumns.forEach(rc => {
                    if (row[rc] && row[rc].toLowerCase().includes('fail')) {
                        failCount++;
                    }
                });
                
                if (failCount >= 2) {
                    criticalIssues[row.task] = {
                        category: row.category,
                        failCount,
                        mantis: row.mantis,
                        owner: row.owner,
                        notes: row.notes
                    };
                }
            });

            // Generate HTML report
            let html = `
                <div style="text-align: center; margin-bottom: 40px;">
                    <h1 style="font-size: 2.5rem; margin-bottom: 10px; color: var(--text-primary);">
                        Release Testing Report
                    </h1>
                    <p style="font-size: 1.1rem; color: var(--text-secondary);">
                        FortiAuthenticator & FortiGate Release Validation
                    </p>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">
                        Generated: ${date}
                    </p>
                </div>

                <!-- Executive Summary -->
                <div style="background: var(--bg-secondary); padding: 25px; border-radius: 8px; border-left: 4px solid var(--accent-primary); margin-bottom: 30px;">
                    <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Executive Summary</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 15px;">
                        This report provides a comprehensive analysis of ${stats.total} test cases across ${stats.categories} product categories, 
                        executed by ${stats.owners} team members through multiple release candidates (RC1-RC6).
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; font-weight: bold; color: ${stats.passRate >= 90 ? 'var(--success)' : stats.passRate >= 75 ? 'var(--warning)' : 'var(--danger)'};">
                                ${stats.passRate}%
                            </div>
                            <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Overall Pass Rate</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; font-weight: bold; color: var(--success);">
                                ${stats.passed}
                            </div>
                            <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Tests Passed</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; font-weight: bold; color: var(--danger);">
                                ${stats.failed}
                            </div>
                            <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Tests Failed</div>
                        </div>
                    </div>
                </div>

                <!-- Release Quality Assessment -->
                <div style="margin-bottom: 30px;">
                    <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Release Quality Assessment</h2>
                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px;">
                        <p style="color: var(--text-secondary); margin-bottom: 15px;">
                            <strong>Overall Status:</strong> 
                            ${stats.passRate >= 95 ? '<span style="color: var(--success);">✓ Excellent - Ready for production release</span>' :
                              stats.passRate >= 85 ? '<span style="color: var(--success);">✓ Good - Recommended for release with minor fixes</span>' :
                              stats.passRate >= 75 ? '<span style="color: var(--warning);">⚠ Moderate - Additional testing recommended</span>' :
                              '<span style="color: var(--danger);">✗ Critical issues require resolution</span>'}
                        </p>
                        <p style="color: var(--text-secondary); margin-bottom: 10px;">
                            ${stats.passRate >= 90 ? 
                                'The release demonstrates strong quality with a high pass rate across all test categories. The product is performing well and shows minimal regression issues.' :
                              stats.passRate >= 75 ?
                                'The release shows acceptable quality with some areas requiring attention. Most core functionality is stable, but several issues need to be addressed before production deployment.' :
                                'The release shows significant quality concerns with multiple failing test cases. A focused effort on bug resolution and re-testing is required before release consideration.'}
                        </p>
                    </div>
                </div>

                <!-- Release Candidate Progression -->
                <div style="margin-bottom: 30px;">
                    <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Release Candidate Progression</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 15px;">
                        Analysis of test execution and pass rates across release candidates:
                    </p>
                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="border-bottom: 2px solid var(--border);">
                                    <th style="padding: 12px; text-align: left; color: var(--text-secondary);">Release</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Tests Run</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Passed</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Failed</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Pass Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rcColumns.map((rc, idx) => {
                                    const stat = rcStats[rc];
                                    if (stat.total === 0) return '';
                                    return `
                                        <tr style="border-bottom: 1px solid var(--border);">
                                            <td style="padding: 12px; color: var(--text-primary); font-weight: 500;">RC${idx + 1}</td>
                                            <td style="padding: 12px; text-align: center; color: var(--text-secondary);">${stat.total}</td>
                                            <td style="padding: 12px; text-align: center; color: var(--success);">${stat.passed}</td>
                                            <td style="padding: 12px; text-align: center; color: var(--danger);">${stat.failed}</td>
                                            <td style="padding: 12px; text-align: center;">
                                                <span style="color: ${stat.rate >= 90 ? 'var(--success)' : stat.rate >= 75 ? 'var(--warning)' : 'var(--danger)'}; font-weight: 600;">
                                                    ${stat.rate}%
                                                </span>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 15px;">
                            ${analyzeRCProgression(rcStats)}
                        </p>
                    </div>
                </div>

                <!-- Category Analysis -->
                <div style="margin-bottom: 30px;">
                    <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Testing Coverage by Category</h2>
                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="border-bottom: 2px solid var(--border);">
                                    <th style="padding: 12px; text-align: left; color: var(--text-secondary);">Category</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Test Cases</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Passed</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Failed</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(categoryStats).map(([category, stat]) => {
                                    const rate = stat.passed + stat.failed > 0 ? Math.round((stat.passed / (stat.passed + stat.failed)) * 100) : 0;
                                    return `
                                        <tr style="border-bottom: 1px solid var(--border);">
                                            <td style="padding: 12px; color: var(--text-primary); font-weight: 500;">${category}</td>
                                            <td style="padding: 12px; text-align: center; color: var(--text-secondary);">${stat.total}</td>
                                            <td style="padding: 12px; text-align: center; color: var(--success);">${stat.passed}</td>
                                            <td style="padding: 12px; text-align: center; color: var(--danger);">${stat.failed}</td>
                                            <td style="padding: 12px; text-align: center;">
                                                ${rate >= 90 ? '✓ <span style="color: var(--success);">Excellent</span>' :
                                                  rate >= 75 ? '⚠ <span style="color: var(--warning);">Good</span>' :
                                                  stat.failed > 0 ? '✗ <span style="color: var(--danger);">Needs Work</span>' :
                                                  '<span style="color: var(--text-muted);">Not Tested</span>'}
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Team Performance -->
                <div style="margin-bottom: 30px;">
                    <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Team Performance</h2>
                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="border-bottom: 2px solid var(--border);">
                                    <th style="padding: 12px; text-align: left; color: var(--text-secondary);">Team Member</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Test Cases</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Tests Executed</th>
                                    <th style="padding: 12px; text-align: center; color: var(--text-secondary);">Pass Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(ownerStats).map(([owner, stat]) => {
                                    const rate = stat.passed + stat.failed > 0 ? Math.round((stat.passed / (stat.passed + stat.failed)) * 100) : 0;
                                    return `
                                        <tr style="border-bottom: 1px solid var(--border);">
                                            <td style="padding: 12px; color: var(--text-primary); font-weight: 500;">${owner}</td>
                                            <td style="padding: 12px; text-align: center; color: var(--text-secondary);">${stat.total}</td>
                                            <td style="padding: 12px; text-align: center; color: var(--text-secondary);">${stat.passed + stat.failed}</td>
                                            <td style="padding: 12px; text-align: center;">
                                                <span style="color: ${rate >= 90 ? 'var(--success)' : rate >= 75 ? 'var(--warning)' : 'var(--danger)'}; font-weight: 600;">
                                                    ${rate}%
                                                </span>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                ${Object.keys(criticalIssues).length > 0 ? `
                <!-- Critical Issues -->
                <div style="margin-bottom: 30px;">
                    <h2 style="color: var(--danger); margin-bottom: 15px; font-size: 1.5rem;">⚠ Critical Issues (Failed Multiple RCs)</h2>
                    <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid var(--danger);">
                        <p style="color: var(--text-secondary); margin-bottom: 15px;">
                            The following test cases have failed in multiple release candidates and require immediate attention:
                        </p>
                        ${Object.entries(criticalIssues).map(([task, issue]) => `
                            <div style="background: var(--bg-secondary); padding: 15px; border-radius: 6px; margin-bottom: 12px; border: 1px solid var(--border);">
                                <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">${task}</div>
                                <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 6px;">
                                    <strong>Category:</strong> ${issue.category} | 
                                    <strong>Owner:</strong> ${issue.owner} | 
                                    <strong>Failed in:</strong> ${issue.failCount} RCs
                                </div>
                                ${issue.mantis ? `
                                    <div style="font-size: 0.85rem; color: var(--danger); margin-bottom: 6px;">
                                        <strong>Mantis:</strong> ${issue.mantis.split(',').map(id => `#${id.trim()}`).join(', ')}
                                    </div>
                                ` : ''}
                                ${issue.notes ? `
                                    <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;">
                                        ${issue.notes}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                ${failedTests.length > 0 ? `
                <!-- Failed Test Cases -->
                <div style="margin-bottom: 30px;">
                    <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Failed Test Cases</h2>
                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px;">
                        <p style="color: var(--text-secondary); margin-bottom: 15px;">
                            Complete list of failed test cases with associated Mantis bug IDs:
                        </p>
                        ${failedTests.slice(0, 20).map(test => `
                            <div style="background: var(--bg-tertiary); padding: 12px; border-radius: 6px; margin-bottom: 10px; border-left: 3px solid var(--danger);">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 6px;">
                                    <div style="font-weight: 500; color: var(--text-primary); flex: 1;">${test.task}</div>
                                    <div style="font-size: 0.8rem; color: var(--text-muted); margin-left: 15px;">${test.rc}</div>
                                </div>
                                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">
                                    <strong>${test.category}</strong> - Owner: ${test.owner}
                                </div>
                                ${test.mantis ? `
                                    <div style="font-size: 0.8rem; color: var(--danger);">
                                        Bug ID(s): ${test.mantis.split(',').map(id => `#${id.trim()}`).join(', ')}
                                    </div>
                                ` : ''}
                                ${test.notes ? `
                                    <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px; font-style: italic;">
                                        ${test.notes}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                        ${failedTests.length > 20 ? `
                            <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 15px; text-align: center;">
                                Showing 20 of ${failedTests.length} failed tests. Export full report for complete details.
                            </p>
                        ` : ''}
                    </div>
                </div>
                ` : `
                <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid var(--success); margin-bottom: 30px;">
                    <h3 style="color: var(--success); margin-bottom: 10px;">✓ No Failed Tests</h3>
                    <p style="color: var(--text-secondary);">
                        All executed test cases have passed successfully. The release demonstrates excellent quality.
                    </p>
                </div>
                `}

                <!-- Recommendations -->
                <div style="margin-bottom: 30px;">
                    <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Recommendations</h2>
                    <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px;">
                        <ul style="color: var(--text-secondary); line-height: 2; margin-left: 20px;">
                            ${generateRecommendations(stats, Object.keys(criticalIssues).length, failedTests.length)}
                        </ul>
                    </div>
                </div>

                <!-- Sign-off -->
                <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid var(--border); text-align: center; color: var(--text-muted); font-size: 0.9rem;">
                    <p>This report was automatically generated by the Release Testing Tracker system.</p>
                    <p style="margin-top: 10px;">Report Date: ${date}</p>
                </div>
            `;

            return html;
        }

        // Analyze RC progression
        function analyzeRCProgression(rcStats) {
            const rcKeys = Object.keys(rcStats).filter(rc => rcStats[rc].total > 0);
            if (rcKeys.length < 2) return 'Insufficient data to analyze progression trends.';
            
            const rates = rcKeys.map(rc => rcStats[rc].rate);
            const improving = rates[rates.length - 1] > rates[0];
            const stable = Math.abs(rates[rates.length - 1] - rates[0]) < 5;
            
            if (stable) {
                return '✓ Pass rates are consistent across release candidates, indicating stable quality.';
            } else if (improving) {
                return '✓ Pass rates show improvement across release candidates, demonstrating effective bug resolution.';
            } else {
                return '⚠ Pass rates have declined in later RCs, indicating potential regression issues that require investigation.';
            }
        }

        // Generate recommendations
        function generateRecommendations(stats, criticalCount, failedCount) {
            const recommendations = [];
            
            if (stats.passRate >= 95) {
                recommendations.push('<li><strong>Release Readiness:</strong> The release demonstrates excellent quality and is recommended for production deployment.</li>');
            } else if (stats.passRate >= 85) {
                recommendations.push('<li><strong>Release Readiness:</strong> The release shows good quality. Address remaining failures before production release.</li>');
            } else if (stats.passRate >= 75) {
                recommendations.push('<li><strong>Release Readiness:</strong> Additional testing and bug fixes required before considering production release.</li>');
            } else {
                recommendations.push('<li><strong>Release Readiness:</strong> Significant quality concerns exist. Defer release until critical issues are resolved.</li>');
            }
            
            if (criticalCount > 0) {
                recommendations.push(`<li><strong>Critical Issues:</strong> ${criticalCount} test case(s) have failed across multiple RCs. These require immediate investigation and resolution.</li>`);
            }
            
            if (failedCount > 10) {
                recommendations.push('<li><strong>Bug Triage:</strong> High number of failures detected. Conduct bug triage meeting to prioritize fixes.</li>');
            }
            
            if (failedCount > 0) {
                recommendations.push('<li><strong>Regression Testing:</strong> After bug fixes, execute full regression test suite to ensure no new issues.</li>');
            }
            
            recommendations.push('<li><strong>Documentation:</strong> Update release notes with known issues and their resolutions.</li>');
            recommendations.push('<li><strong>Continuous Monitoring:</strong> Track test metrics in future RCs to ensure quality improvements are maintained.</li>');
            
            if (stats.passRate >= 90) {
                recommendations.push('<li><strong>Performance Testing:</strong> Consider additional performance and load testing before release.</li>');
            }
            
            return recommendations.join('');
        }

        // Download report as PDF
        function downloadReportPDF() {
            const element = document.getElementById('reportBody');
            const opt = {
                margin: 10,
                filename: `Test_Report_${new Date().toISOString().split('T')[0]}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, backgroundColor: '#0f1419' },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            
            html2pdf().set(opt).from(element).save();
            showNotification('PDF report downloading...');
        }

        // Download report as Word
        function downloadReportWord() {
            const element = document.getElementById('reportBody');
            const html = element.innerHTML;
            
            // Create a simple HTML document for Word
            const fullHtml = `
                <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>
                <head><meta charset='utf-8'><title>Test Report</title></head>
                <body style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background: white; color: black;">
                    ${html.replace(/var\(--[^)]+\)/g, '#333').replace(/style="[^"]*"/g, (match) => {
                        return match.replace(/var\(--text-primary\)/g, '#000')
                                    .replace(/var\(--text-secondary\)/g, '#555')
                                    .replace(/var\(--text-muted\)/g, '#888')
                                    .replace(/var\(--bg-[^)]+\)/g, '#f5f5f5')
                                    .replace(/var\(--success\)/g, '#10b981')
                                    .replace(/var\(--danger\)/g, '#ef4444')
                                    .replace(/var\(--warning\)/g, '#f59e0b')
                                    .replace(/var\(--accent-primary\)/g, '#3b82f6')
                                    .replace(/var\(--border\)/g, '#ddd');
                    })}
                </body>
                </html>
            `;
            
            const blob = new Blob(['\ufeff', fullHtml], {
                type: 'application/msword'
            });
            
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Test_Report_${new Date().toISOString().split('T')[0]}.doc`;
            a.click();
            URL.revokeObjectURL(url);
            
            showNotification('Word report downloading...');
        }

        // Copy report to clipboard
        function copyReportToClipboard() {
            const element = document.getElementById('reportBody');
            const text = element.innerText;
            
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Report copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy:', err);
                showNotification('Failed to copy report');
            });
        }

        // Save test case
        function saveTestCase(event) {
            event.preventDefault();
            
            const index = parseInt(document.getElementById('editIndex').value);
            
            // Update test data
            testData[index] = {
                category: document.getElementById('editCategory').value,
                task: document.getElementById('editTask').value,
                owner: document.getElementById('editOwner').value,
                rc1: document.getElementById('editRC1').value,
                rc2: document.getElementById('editRC2').value,
                rc3: document.getElementById('editRC3').value,
                rc4: document.getElementById('editRC4').value,
                rc5: document.getElementById('editRC5').value,
                rc6: document.getElementById('editRC6').value,
                mantis: document.getElementById('editMantis').value,
                notes: document.getElementById('editNotes').value
            };
            
            // Update filtered data if necessary
            filteredData = testData.filter(row => {
                const search = document.getElementById('search').value.toLowerCase();
                const category = document.getElementById('filterCategory').value;
                const owner = document.getElementById('filterOwner').value;
                const rc = document.getElementById('filterRC').value;
                const status = document.getElementById('filterStatus').value;

                const matchesSearch = !search || 
                    row.task.toLowerCase().includes(search) ||
                    row.category.toLowerCase().includes(search) ||
                    row.owner.toLowerCase().includes(search);
                
                const matchesCategory = !category || row.category === category;
                const matchesOwner = !owner || row.owner === owner;
                
                let matchesRC = true;
                if (rc) {
                    const rcKey = rc.toLowerCase();
                    matchesRC = row[rcKey] !== '';
                }

                let matchesStatus = true;
                if (status) {
                    const rcColumns = ['rc1', 'rc2', 'rc3', 'rc4', 'rc5', 'rc6'];
                    matchesStatus = rcColumns.some(rcCol => 
                        row[rcCol].toLowerCase().includes(status)
                    );
                }

                return matchesSearch && matchesCategory && matchesOwner && matchesRC && matchesStatus;
            });
            
            // Refresh UI
            renderTable();
            updateStats();
            closeModal('editModal');
            showNotification('Test case updated successfully!');
        }

        // Initialize on page load
        init();
