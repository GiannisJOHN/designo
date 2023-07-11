import canadaMapDesktop from 'assets/locations/desktop/image-map-canada.png'
import canadaMapMobile from 'assets/locations/tablet/image-map-canada.png'

import australiaMapDesktop from 'assets/locations/desktop/image-map-australia.png'
import australiaMapMobile from 'assets/locations/tablet/image-map-australia.png'

import ukMapDesktop from 'assets/locations/desktop/image-map-united-kingdom.png'
import ukMapMobile from 'assets/locations/tablet/image-map-uk.png'


export const locationsData = [
    {
        title: 'Canada',
        office: 'central',
        street: '3886 Wellington Street',
        city: 'Toronto, Ontario M9C 3J5',
        phone: '+1 253-863-8967',
        mail: 'contact@designo.co',
        imgDesktop: canadaMapDesktop,
        imgTablet: canadaMapMobile,
        orderReverse: false
    },
    {
        title: 'Australia',
        office: 'AU',
        street: '19 Balonne Street',
        city: 'New South Wales 2443',
        phone: '(02) 6720 9092',
        mail: 'contact@designo.au',
        imgDesktop: australiaMapDesktop,
        imgTablet: australiaMapMobile,
        orderReverse: true
    },
    {
        title: 'United Kingdom',
        office: 'UK',
        street: '13 Colorado Way',
        city: 'Rhyd-y-fro SA8 9GA',
        phone: '078 3115 1400',
        mail: 'contact@designo.uk',
        imgDesktop: ukMapDesktop,
        imgTablet: ukMapMobile,
        orderReverse: false
    }
]