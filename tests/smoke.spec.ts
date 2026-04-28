import { expect, test } from '@grafana/plugin-e2e';

test('smoke: panel renders with testdata datasource', async ({
  readProvisionedDashboard,
  gotoPanelEditPage,
}) => {
  const dashboard = await readProvisionedDashboard({ fileName: 'dashboard-testdata.json' });
  const panelEditPage = await gotoPanelEditPage({ dashboard, id: '1' });
  await expect(panelEditPage.refreshPanel()).toBeOK();
});
