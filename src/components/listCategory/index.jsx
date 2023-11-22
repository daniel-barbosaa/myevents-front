import { TabView, TabPanel } from 'primereact/tabview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from './style';

import '../../primereact-theme/theme.css';

export function ListCategory() {
  const scrollableTabs = Array.from({ length: 10 }, (_, i) => ({
    title: `Tab ${i + 1}`,
    content: `Tab ${i + 1} Content`,
  }));

  return (
    <div className="card">
      <TabView scrollable>
        {scrollableTabs.map((tab) => (
          <TabPanel key={tab.title} header="Icone aqui">
            <p className="m-0">{tab.content}</p>
          </TabPanel>
        ))}
      </TabView>
    </div>
  );
}
