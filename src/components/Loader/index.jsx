import { ClipLoader } from 'react-spinners';

import '../../primereact-theme/theme.css';

export function Loader({ ...props }) {
  return <ClipLoader {...props} loading />;
}
