import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import { Business as BusinessType } from '../../types';

interface BusinessListProps {
  businesses?: BusinessType[];
}

class BusinessList extends React.Component<BusinessListProps> {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses?.map(business => {
                        return <Business business={business} key={business.id} />
                    })
                }
            </div>
        );
    }
}

export default BusinessList;
