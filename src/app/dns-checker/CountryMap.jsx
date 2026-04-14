import Svgs from "@/components/svg-componet/Svgs";
import { dns_server } from "@/utils/dns-servers";
import { ComposableMap, Geographies, Geography, Marker } from '@vnedyalk0v/react19-simple-maps';
import geoUrl from 'world-atlas/countries-110m.json';

function CountryMap({ result, isloding }) {

    return (
        <div className="fixed flex flex-col items-start justify-start  bg-white p-4 rounded rounded-base shadow-lg mx-auto w-[850px] h-[450px]">
            <h2 className="text-lg font-bold text-heading align-top">DNS Propagation Map</h2>
            <ComposableMap
                width={800}
                height={400}
                style={{ width: "100%", height: "auto", overflow:"auto" }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies, errors }) => {
                        if (errors) {
                            console.log(errors);
                        }
                        return geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} fill="#4A9BE8" />
                        ))
                    }
                    }
                </Geographies>


                {(!isloding && result && result.length >= 0) && (result.map((item, index) => (
                    <Marker key={index} coordinates={item.coordinates}>
                        {item.success ? (
                            (Array.isArray(item.success) && item.success.length > 0) ? (
                                <Svgs type="tick" translate={true} />
                            ) : ((typeof item.success === 'object' && Object.keys(item.success).length > 0) ?
                                (
                                    <Svgs type="tick" translate={true} />
                                ) : (
                                <Svgs type="cross" translate={true} />    
                                )
                            )
                        ) : (
                           <Svgs type="cross" translate={true} />
                        )}

                    </Marker>
                )))}

                {(!result || result.length === 0) &&
                    dns_server.map((item, index) =>
                        item.coordinates ? (
                            <Marker key={index} coordinates={item.coordinates}>
                                <Svgs type="location" translate={true} />
                            </Marker>
                        ) : null
                    )
                }
            </ComposableMap>
        </div >
    );
}

export default CountryMap