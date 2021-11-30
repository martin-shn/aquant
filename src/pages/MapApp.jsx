import { useEffect, useRef, useState } from 'react';

const scriptUrl = 'http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AmSkA2y44H3WY8YmJ2PgjzsdYqgfjppdFpiwsGVTTJYwmq9oBD0-PTzk3iSGHXmv';

export const MapApp = () => {
    const initCenter = [31.771959, 35.217018];
    const [coords, setCoords] = useState([]);
    const [form, setForm] = useState({
        addBy: 'add-coords',
        lat: '',
        lng: '',
        place: 'Jerusalem',
    });

    const elRef = useRef();

    useEffect(() => {
        loadScript(scriptUrl);
    }, []);

    useEffect(() => {
        if (window.Microsoft) getMap();
    }, [coords]);

    const loadScript = async (src) => {
        var tag = document.createElement('script');
        tag.async = false;
        tag.defer = false;
        tag.src = src;
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);
        setTimeout(() => getMap(), 4000);
    };

    const getMap = () => {
        const Microsoft = window.Microsoft;
        var map = new Microsoft.Maps.Map('#myMap', { center: new Microsoft.Maps.Location(initCenter[0], initCenter[1]), zoom: 5 });

        var center = map.getCenter();
        console.log(coords);
        var exteriorRing = coords.map((currCoord) => new Microsoft.Maps.Location(currCoord[0], currCoord[1])) || [];
        exteriorRing.unshift(center);
        if (exteriorRing.length > 1) exteriorRing.push(center);

        //Create a polygon
        var polygon = new Microsoft.Maps.Polygon(exteriorRing, {
            fillColor: 'rgba(0, 255, 0, 0.5)',
            strokeColor: 'red',
            strokeThickness: 2,
        });

        //Add the polygon to map
        map.entities.push(polygon);
    };

    const handleChange = ({ target }) => {
        switch (target.name) {
            case 'coords-by':
                setForm({ ...form, addBy: target.id });
                break;
            case 'byLat':
                setForm({ ...form, lat: +target.value });
                break;
            case 'byLng':
                setForm({ ...form, lng: +target.value });
                break;
            case 'place':
                setForm({ ...form, place: target.value });
                break;

            default:
                break;
        }
    };

    const onSubmitCoords = (ev) => {
        ev.preventDefault();
        if (form.addBy === 'add-place') {
            console.log('Adding: Place:', form.place);
            const currCoords = [...coords];
            currCoords.push([form.place]);
            // setCoords(currCoords);
        } else {
            const currCoords = [...coords];
            currCoords.push([form.lat, form.lng]);
            currCoords.sort((a, b) => a[0] - b[0]);
            setCoords(currCoords);
        }
        setForm({ ...form, lat: '', lng: '', place:'' });
        elRef.current.focus();
    };

    return (
        <main className='map-app main-layout'>
            <section className='container'>
                <div className='map-form'>
                    <form onSubmit={onSubmitCoords}>
                        <h3>Coordinates Form</h3>
                        <div>
                            <input
                                type='radio'
                                id='add-coords'
                                name='coords-by'
                                checked={form.addBy === 'add-coords' ? true : false}
                                onChange={handleChange}
                            />
                            <label htmlFor='add-coords' className='radio'>
                                Add by Coords
                            </label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='add-place'
                                name='coords-by'
                                checked={form.addBy === 'add-place' ? true : false}
                                onChange={handleChange}
                            />
                            <label htmlFor='add-place' className='radio'>
                                Add by Place
                            </label>
                        </div>

                        {form.addBy === 'add-coords' && (
                            <div>
                                <div>
                                    <label htmlFor='lng'>Lng:</label>
                                    <input id='lng' ref={elRef} type='number' value={form.lng} name='byLng' onChange={handleChange} autoFocus />
                                </div>
                                <div>
                                    <label htmlFor='lat'>Lat:</label>
                                    <input id='lat' type='number' value={form.lat} name='byLat' onChange={handleChange} />
                                </div>
                            </div>
                        )}

                        {form.addBy === 'add-place' && (
                            <div>
                                <div>
                                    <label htmlFor='place' className='place'>Place:</label>
                                    <input id='place' ref={elRef} type='text' value={form.place} name='place' onChange={handleChange} autoFocus />
                                </div>
                            </div>
                        )}

                        <button>Submit Coords</button>
                    </form>
                </div>
                <div id='myMap' className='myMap'></div>
            </section>
        </main>
    );
};
