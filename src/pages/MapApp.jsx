import { ReactBingmaps } from 'react-bingmaps';
import { useEffect, useState } from 'react';

export const MapApp = () => {
    const center = [31.771959, 35.217018];
    const [coords, setCoords] = useState();
    const [form, setForm] = useState({
        addBy: 'add-coords',
        lat: '',
        lng: '',
        place: 'Jerusalem',
    });

    // useEffect(() => {
    //     // getMap();
    //     setCoords({
    //         a:[center,[30,30],[31,34], center],
    //           "polygonStyle" : {
    //             fillColor: 'rgba(161,224,255,0.4)',
    //             strokeColor: '#a495b2',
    //             strokeThickness: 2
    //           }

    //       });
    //     }, [])

    // const getMap = () => {
    //     var map = new Microsoft.Maps.Map('#myMap', {});

    //     var center = map.getCenter();

    //     //Create array of locations to form a ring.
    //     var exteriorRing = [
    //         center,
    //         new Microsoft.Maps.Location(center.latitude - 0.5, center.longitude - 1),
    //         new Microsoft.Maps.Location(center.latitude - 0.5, center.longitude + 1),
    //         center,
    //     ];

    //     //Create a polygon
    //     var polygon = new Microsoft.Maps.Polygon(exteriorRing, {
    //         fillColor: 'rgba(0, 255, 0, 0.5)',
    //         strokeColor: 'red',
    //         strokeThickness: 2,
    //     });

    //     //Add the polygon to map
    //     map.entities.push(polygon);
    // };

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
        form.addBy === 'add-place' ? console.log('Adding: Place:', form.place) : console.log('Adding: Lat:', form.lat, 'Lng:', form.lng);
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
                                    <input id='lng' type='number' value={form.lng} name='byLng' onChange={handleChange} />
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
                                    <label htmlFor='place'>Place:</label>
                                    <input id='place' type='text' value={form.place} name='place' onChange={handleChange} />
                                </div>
                            </div>
                        )}

                        <button>Submit Coords</button>
                    </form>
                </div>
                <div className='myMap'>
                    <ReactBingmaps
                        bingmapKey='AmSkA2y44H3WY8YmJ2PgjzsdYqgfjppdFpiwsGVTTJYwmq9oBD0-PTzk3iSGHXmv'
                        center={center}
                        boundary={{
                            'location': ['Jerusalem'],
                            'option': {
                                entityType: 'PopulatedPlace',
                            },
                            'polygonStyle': {
                                fillColor: 'rgba(161,224,255,0.4)',
                                strokeColor: '#a495b2',
                                strokeThickness: 2,
                            },
                        }}
                    ></ReactBingmaps>
                </div>
            </section>
        </main>
    );
};
