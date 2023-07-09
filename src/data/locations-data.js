import canadaMapDesktop from '../assets/locations/desktop/image-map-canada.png'
import canadaMapMobile from '../assets/locations/mobile/image-map-canada.png'

import australiaMapDesktop from '../assets/locations/desktop/image-map-australia.png'
import australiaMapMobile from '../assets/locations/mobile/image-map-australia.png'

import ukMapDesktop from '../assets/locations/desktop/image-map-united-kingdom.png'
import ukMapMobile from '../assets/locations/mobile/image-map-united-kingdom.png'


export const locationsData = [
    {
        title: 'Canada',
        office: 'central',
        street: '3886 Wellington Street',
        city: 'Toronto, Ontario M9C 3J5',
        phone: '+1 253-863-8967',
        mail: 'contact@designo.co',
        imgDesktop: canadaMapDesktop,
        imgTablet: canadaMapMobile
    },
    {
        title: 'Australia',
        office: 'AU',
        street: '19 Balonne Street',
        city: 'New South Wales 2443',
        phone: '(02) 6720 9092',
        mail: 'contact@designo.au',
        imgDesktop: australiaMapDesktop,
        imgTablet: australiaMapMobile
    },
    {
        title: 'United Kingdom',
        office: 'UK',
        street: '13 Colorado Way',
        city: 'Rhyd-y-fro SA8 9GA',
        phone: '078 3115 1400',
        mail: 'contact@designo.uk',
        imgDesktop: ukMapDesktop,
        imgTablet: ukMapMobile
    }
]