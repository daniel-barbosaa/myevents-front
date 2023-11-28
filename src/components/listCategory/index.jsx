import { TabView, TabPanel } from 'primereact/tabview';
import { Icon, Container, Text } from './style';
import utils from '../../utils';

import '../../primereact-theme/theme.css';

export function ListCategory() {
  const category = utils.categoryInfo;

  return (
    <Container>
      <Text>PARTIU, PRÓXIMO ROLÊ!</Text>
      <TabView scrollable>
        {category.map((item) => (
          <TabPanel key={item.label} header={<Icon src={item.icon} />}>
            <p className="m-0">{item.label}</p>
          </TabPanel>
        ))}
      </TabView>
    </Container>
  );
}
