import { AppProps } from '@polkadot/react-components/types';
import { ActionStatus } from '@polkadot/react-components/Status/types';
export interface ComponentProps extends AppProps {
    location: any;
}
export interface ModalProps {
    onClose: () => void;
    onStatusChange: (status: ActionStatus) => void;
}
