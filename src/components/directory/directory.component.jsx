import React from 'react'

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                title: 'helmets',
                imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51bKw-rw5gL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
                
                id: 1
            },

            {
                title: 'jackets',
                imageUrl: 'https://www.customelements.in/wp-content/uploads/2021/12/LS2-Teide-Men-All-Season-Black-Riding-Jacket-4.jpg',
                id: 2
            },

            {
                title: 'gloves',
                imageUrl: 'https://5.imimg.com/data5/FS/IQ/MY-72777223/winter-protection-pro-biker-gloves-500x500.jpg',
                id: 3
            },

            {
                title: 'boots',
                imageUrl: 'https://autocart.biz/wp-content/uploads/imgp/Puma-250-3-4869.jpg',
                size: 'large',
                id: 4
            },

            {
                title: 'accessories',
                imageUrl: 'https://i.ytimg.com/vi/tx4SfuB2Suw/maxresdefault.jpg',
                size: 'large',
                id: 5
            }     
        ],
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key ={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>

        )
    }
}

export default Directory;  