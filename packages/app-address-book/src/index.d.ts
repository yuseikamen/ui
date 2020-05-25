import { AppProps } from '@polkadot/react-components/types';
import { SubjectInfo } from '@polkadot/ui-keyring/observable/types';
import React from 'react';
interface Props extends AppProps {
    allAddresses?: SubjectInfo;
    location: any;
}
export default function AddressBookApp({ basePath, onStatusChange }: Props): React.ReactElement<Props>;
export {};
