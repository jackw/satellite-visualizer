import { expect, test } from '@grafana/plugin-e2e';
import { TEST_IDS } from '../src/constants';

test('smoke: panels render', async ({ gotoDashboardPage, page, selectors }) => {
  const dashboardPage = await gotoDashboardPage({ uid: 'gnh6bt' });
  const panel1 = await dashboardPage.getByGrafanaSelector(
    selectors.components.Panels.Panel.title('Satellite-1 (Model)')
  );
  const panel2 = await dashboardPage.getByGrafanaSelector(
    selectors.components.Panels.Panel.title('Satellite-2 (Point)')
  );
  await expect(panel1).toBeVisible();
  await expect(panel2).toBeVisible();
  await expect(panel1.getByTestId(TEST_IDS.PANEL)).toBeVisible();
  await expect(panel2.getByTestId(TEST_IDS.PANEL)).toBeVisible();
  // check for canvas elements in the panels
  await expect(panel1.locator('canvas')).toHaveCount(1);
  await expect(panel2.locator('canvas')).toHaveCount(1);
});
