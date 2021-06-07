import React from 'react';
import { Menu } from '@headlessui/react';


import Countries from '../Countries/Countries'

const HomeScreen = () => {
    return (
        <>
            <div>
                <form>
                    <input />
                </form>
                <Menu>
                    <Menu.Button>Filter By Region</Menu.Button>
                    <Menu.Items>
                        <Menu.Item>
                            <button>Africa</button>
                        </Menu.Item>
                        <Menu.Item>
                            <button>Americas</button>
                        </Menu.Item>
                        <Menu.Item>
                            <button>Asia</button>
                        </Menu.Item>
                        <Menu.Item>
                            <button>Europe</button>
                        </Menu.Item>
                        <Menu.Item>
                            <button>Oceania</button>
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
            <Countries />
        </>
    )
}

export default HomeScreen
