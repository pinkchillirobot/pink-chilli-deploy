"use client";
import { useRef, useState, useEffect } from "react";
import mapboxgl, { Map as TMap } from "mapbox-gl";
import Image from "next/image";
import btnClose from "../../public/btn-close.svg";
import img1 from "../../public/constellation/yuhua-1.jpg";
import img2 from "../../public/constellation/yuhua-2.jpg";
import img3 from "../../public/constellation/yuhua-3.jpg";
import img4 from "../../public/constellation/yuhua-4.jpg";
import img5 from "../../public/constellation/yuhua-5.jpg";
import img6 from "../../public/constellation/yuhua-6.jpg";
import img7 from "../../public/constellation/yuhua-7.jpg";
import img8 from "../../public/constellation/yuhua-8.jpg";
import img9 from "../../public/constellation/yuhua-9.jpg";
import img10 from "../../public/constellation/yuhua-10.jpg";
import img11 from "../../public/constellation/yuhua-11.jpg";
import img12 from "../../public/constellation/yuhua-12.jpg";

const constellationData = [
  {
    name: "Yuhua Place West Village",
    year: "1983 / 1986",
    address: "347 Jurong East Avenue 1\nSingapore 600347",
    category: "Landmark",
    typology: "HDB",
    ethnicity: <>&mdash;</>,
    speciality: <>&mdash;</>,
    image: img1,
  },

  {
    name: "Nature Bakery",
    year: "2005",
    address: "345 Jurong East Street 31, #01-15\nSingapore 600345",
    category: "Food",
    typology: "Bakery",
    ethnicity: <>Mixed</>,
    speciality: "Pastries, chiffon cake, waffles, bread",
    image: img2,
  },

  {
    name: "Lee's Confectionery",
    year: "2018",
    address: "343 Jurong East Street 31, #01-59\nSingapore 600343",
    category: "Food",
    typology: "Confectionery",
    ethnicity: "Western",
    speciality: "Western pastries",
    image: img3,
  },
  {
    name: "Yuhua Place Market and Hawker Centre",
    year: "1984",
    address: "347 Jurong East Avenue 1\nSingapore 600347",
    category: "Landmark",
    typology: "Market / Hawker",
    ethnicity: <>&mdash;</>,
    speciality: <>&mdash;</>,
    image: img4,
  },
  {
    name: "Wonderyam Confectionery and Kueh Garden",
    year: "2010s",
    address: "348 Jurong East Avenue 1, #01-1245\nSingapore 600348",
    category: "Food",
    typology: "Confectionery",
    ethnicity: "Chinese Teochew",
    speciality: "Teochew pastries",
    image: img5,
  },
  {
    name: "Joo Siah Bak Koot Teh",
    year: "1983",
    address: "349 Jurong East Avenue 1, #01-1215\nSingapore 600349",
    category: "Restaurant",
    typology: "Coffee shop",
    ethnicity: (
      <>
        Mixed
        <br />
        (Chinese, Malay)
      </>
    ),
    speciality: <>Teochew bak kut teh</>,
    image: img6,
  },
  {
    name: "Richie's Crispy Puff",
    year: "2000s",
    address: "349 Jurong East Avenue 1\nSingapore 600349",
    category: "Food",
    typology: "Bakery",
    ethnicity: <>Malay</>,
    speciality: <>Curry puff</>,
    image: img7,
  },
  {
    name: "HDB Yuhua Village",
    year: "1983-1985",
    address: "24 Jurong West Avenue 1\nSingapore",
    category: "Landmark",
    typology: "HDB",
    ethnicity: <>&mdash;</>,
    speciality: <>&mdash;</>,
    image: img8,
  },
  {
    name: "Hiap Huat Cakeshop",
    year: "1974",
    address: "253 Jurong East Street 24\nSingapore 600253",
    category: "Food",
    typology: "Confectionery",
    ethnicity: "Chinese Teochew",
    speciality: "Teochew pastries",
    image: img9,
  },
  {
    name: "Zai Shun Curry Fish Head",
    year: "1980s",
    address: "253 Jurong East Street 24, #01-205\nSingapore 600253",
    category: "Restaurant",
    typology: "Zi char",
    ethnicity: "Chinese",
    speciality: "Fish head curry",
    image: img10,
  },
  {
    name: "Han N Han Peanut Cake",
    year: "1999",
    address: "252 Jurong East Street 24, #01-151\nSingapore 600252",
    category: "Food",
    typology: "Bakery",
    ethnicity: (
      <>
        Mixed
        <br />
        (Chinese, Malay)
      </>
    ),
    speciality: <>Peanut pancake (min jiang kueh)</>,
    image: img11,
  },
  {
    name: "Yuhua Village Market and Food Centre",
    year: "1983",
    address: "254 Jurong East Street 24\nSingapore 600254",
    category: "Landmark",
    typology: "Market / Hawker",
    ethnicity: <>&mdash;</>,
    speciality: <>&mdash;</>,
    image: img12,
  },
];

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export const Map = () => {
  const map = useRef<TMap>();
  const mapContainer = useRef<HTMLDivElement>(null);
  const [lng, setLng] = useState(103.7344);
  const [lat, setLat] = useState(1.3443);
  const [showPlace, setShowPlace] = useState<number>();
  const [zoom, setZoom] = useState<number>();

  useEffect(() => {
    if (map.current) return; // initialize map only once

    let targetZoom = 15.2;
    if (mapContainer.current?.offsetWidth) {
      targetZoom -=
        2 -
        (2 * Math.max(300, Math.min(1000, mapContainer.current.offsetWidth))) /
          700;
      setZoom(() => targetZoom);
    }

    map.current = new mapboxgl.Map({
      container: "map-container",
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL,
      center: [lng, lat],
      maxBounds: [
        [103.72249232195622, 1.3355558424240996],
        [103.74543442130016, 1.3529306311433231],
      ],
      zoom: targetZoom,
      scrollZoom: false,
    });

    map.current.on("load", () => {
      if (map.current === undefined) {
        return;
      }
      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                name: "route",
              },
              geometry: {
                coordinates: [
                  [103.73132777010011, 1.3457446401839377],
                  [103.73122887784984, 1.3456757342926124],
                  [103.7308333088547, 1.3456907138346565],
                  [103.73076438395333, 1.3456367874842243],
                  [103.73076138721882, 1.3454210820714678],
                  [103.73079135456783, 1.3453491802626303],
                  [103.73097715212646, 1.3453132293574441],
                  [103.73117493662295, 1.3453132293574441],
                  [103.73087526314157, 1.3453132293574441],
                  [103.7308662729381, 1.3451903970946404],
                  [103.7308662729381, 1.3450675648246744],
                  [103.73088765094332, 1.3447951655986685],
                  [103.73091306006387, 1.3445284433024653],
                  [103.73091729491682, 1.3443336936714445],
                  [103.730972348011, 1.3442659546660138],
                  [103.73113327244187, 1.3442278514743577],
                  [103.73128572716394, 1.3442405525383236],
                  [103.73128996201837, 1.3443463947348278],
                  [103.73130266657864, 1.3446342854865065],
                  [103.73130266657864, 1.3447824645375874],
                  [103.7313365454051, 1.344837502467911],
                  [103.73150170468892, 1.344837502467911],
                  [103.73165839426542, 1.3448925403969696],
                  [103.73206917504626, 1.3451634963392536],
                  [103.73216234182127, 1.345222767946737],
                  [103.73240796331982, 1.3450407194309548],
                  [103.73355009200043, 1.344549979606569],
                  [103.73417685030631, 1.344295958348738],
                  [103.73517626427014, 1.343745584491117],
                  [103.73587501508479, 1.3433518513996603],
                  [103.73596818185979, 1.343288346056113],
                  [103.73601053039363, 1.3434195904304005],
                  [103.7359766515657, 1.343572003243878],
                  [103.7361164017289, 1.3436482096470144],
                  [103.73623921247747, 1.3439191657274705],
                  [103.73626885645245, 1.3440038394955707],
                  [103.736395900145, 1.3443552359025261],
                  [103.73642977897151, 1.3443975727808493],
                  [103.73665422620383, 1.3443001979613882],
                  [103.73680244607371, 1.3442705621438762],
                  [103.73688290828773, 1.3441054483120922],
                  [103.7367473929774, 1.3439615029090533],
                  [103.73661187767004, 1.3437498184782584],
                  [103.73652718060089, 1.343622807810391],
                  [103.73653141545384, 1.3435169655825092],
                  [103.7366034079626, 1.3434830960694626],
                  [103.7366457564965, 1.34326294421723],
                  [103.73671774900384, 1.3431571019737447],
                  [103.73678127180534, 1.3430639607943107],
                  [103.7370469310718, 1.3429253851711422],
                  [103.73724596918203, 1.3428449450555178],
                  [103.7376567499644, 1.3426332605278049],
                  [103.73781343954084, 1.3426120920734235],
                  [103.7378769623424, 1.3426290268361072],
                  [103.73798283367768, 1.3426713637443157],
                  [103.73806329589235, 1.342819542913091],
                  [103.73816493237473, 1.3428872819585678],
                  [103.73838514475267, 1.3429592546933975],
                  [103.73857994801006, 1.3429634883831199],
                  [103.73870699361152, 1.3429592546933975],
                  [103.73877898612034, 1.3429592546933975],
                  [103.7388975620159, 1.343166705503549],
                  [103.73891873628213, 1.3432767814357618],
                  [103.73886791804233, 1.3434249605677877],
                  [103.73875781185268, 1.3434588300831223],
                  [103.73812976775525, 1.343843717846255],
                  [103.73795190391115, 1.3438479515344426],
                  [103.73775430778005, 1.3435124085788175],
                ],
                type: "LineString",
              },
            },
          ],
        },
      });

      map.current.addSource("point-labels", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                label: 3,
              },
              geometry: {
                coordinates: [103.7309328362652, 1.3458952616417292],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: "1",
              },
              geometry: {
                coordinates: [103.73100666857863, 1.3454892959654075],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 2,
              },
              geometry: {
                coordinates: [103.73151183698957, 1.345702962111801],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 4,
              },
              geometry: {
                coordinates: [103.73100573539233, 1.3450346115080265],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 5,
              },
              geometry: {
                coordinates: [103.73079201029282, 1.3442984341792226],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 6,
              },
              geometry: {
                coordinates: [103.731405984214, 1.3442537585020062],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 7,
              },
              geometry: {
                coordinates: [103.73141375603615, 1.3446403001934897],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 8,
              },
              geometry: {
                coordinates: [103.73698251643026, 1.344001120770983],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 9,
              },
              geometry: {
                coordinates: [103.73672594466683, 1.3435749978120128],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 10,
              },
              geometry: {
                coordinates: [103.73808329205008, 1.342942018909497],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                label: 11,
              },
              geometry: {
                coordinates: [103.73790948537311, 1.3439969836567656],
                type: "Point",
              },
            },

            {
              type: "Feature",
              properties: {
                label: 12,
              },
              geometry: {
                coordinates: [103.73775430778005, 1.3435124085788175],
                type: "Point",
              },
            },
          ],
        },
      });

      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#eba7ab",
          "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2, 15, 6],
        },
      });

      map.current.addLayer({
        id: "point-bg",
        type: "circle",
        source: "point-labels",
        layout: {
          visibility: "visible",
        },
        paint: {
          "circle-color": "#ffffff",
          "circle-stroke-color": "#eba7ab",
          "circle-stroke-width": 1,
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 14, 5, 15, 15],
        },
      });

      map.current.addLayer({
        id: "point-labels",
        type: "symbol",
        source: "point-labels",
        layout: {
          visibility: "visible",
          "text-field": "{label}",
          "text-font": ["Suisse Int'l Mono Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 14, 5, 15, 15],
          "icon-allow-overlap": true,
          "text-allow-overlap": true,
        },
        paint: {
          "text-color": "#000000",
        },
      });
    });

    map.current.on("move", () => {
      if (map.current === undefined) {
        return;
      }
      setLng(parseFloat(map.current.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current.getCenter().lat.toFixed(4)));
    });

    map.current.on("click", "point-bg", (e) => {
      const thisFeature = e.features?.[0];
      if (thisFeature) {
        const label = parseInt(thisFeature.properties?.label);
        if (label > 0 && label < 13) {
          setShowPlace(() => label - 1);
        }
      }
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.current.on("mouseenter", "point-bg", () => {
      if (map.current == undefined) {
        return;
      }
      map.current.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.current.on("mouseleave", "point-bg", () => {
      if (map.current == undefined) {
        return;
      }

      map.current.getCanvas().style.cursor = "";
    });
  }, []);

  useEffect(() => {
    if (map.current && zoom !== undefined) {
      map.current.zoomTo(zoom);
    }
  }, [zoom]);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const handler = () => {
      if (id !== undefined) {
        clearTimeout(id);
      }
      id = setTimeout(() => {
        if (map.current === undefined) {
          return;
        }
        map.current.resize();
      }, 500);
    };

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <>
      <div
        className="py-2 px-4 border-chilli-grey scroll-my-16 border-x"
        id="map"
      >
        <div className="aspect-[4/3] md:aspect-[15/8] font-mono text-xs relative">
          <div
            ref={mapContainer}
            id="map-container"
            className="map-container w-full h-full"
          />
          <div className="absolute right-2 bottom-2 flex flex-col gap-2 [&_button]:h-8 [&_button]:w-8 [&_button]:bg-white [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:text-lg">
            <button
              type="button"
              onClick={() => {
                if (zoom !== undefined) {
                  setZoom(zoom + 0.2);
                }
              }}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => {
                if (zoom !== undefined) {
                  setZoom(zoom - 0.2);
                }
              }}
            >
              -
            </button>
          </div>
        </div>

        <div
          className="fixed top-0 right-0 w-full h-full z-25 bg-[transparent] cursor-pointer"
          style={{ display: showPlace !== undefined ? "block" : "none" }}
          onClick={() => {
            setShowPlace(() => undefined);
          }}
        >
          &nbsp;
        </div>
        <div
          className={`fixed top-0 right-0 w-full h-full overflow-hidden max-w-[40rem]`}
          style={{
            transition: "all ease-out 500ms",
            zIndex: showPlace !== undefined ? 30 : 0,
            right: showPlace === undefined ? "-40rem" : "0",
          }}
        >
          <div
            className={`absolute w-full h-full bg-white/90 border-l border-chilli-grey top-0 backdrop-blur-sm`}
          >
            <button
              className="top-4 right-4 absolute p-1"
              onClick={() => {
                setShowPlace(() => undefined);
              }}
            >
              <Image src={btnClose} alt="Close" width={20} height={20} />
            </button>
            {showPlace !== undefined && (
              <span className="absolute top-4 left-4 bg-chilli-pink w-8 h-8 flex justify-center items-center rounded-full font-mono">
                {showPlace + 1}
              </span>
            )}
            <div className="scroller w-[calc(100%+40px)] h-full overflow-y-scroll">
              {showPlace !== undefined && (
                <div className="w-[calc(100%-40px)] p-4 pt-16">
                  <h4 className="text-4xl pt-8 tracking-tight m-0">
                    {constellationData[showPlace].name}
                  </h4>
                  <h5 className="text-sm font-mono mt-0 mb-8">
                    Est. {constellationData[showPlace].year}
                  </h5>
                  <address className="text-base not-italic leading-snug pb-4 whitespace-pre-line">
                    {constellationData[showPlace].address}
                  </address>
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={constellationData[showPlace].image}
                      placeholder="blur"
                      alt="image of place"
                      className="w-full h-full"
                      fill={true}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>{constellationData[showPlace].category}</div>
                    <div className="[&_label]:block [&_label]:font-mono [&_label]:text-sm [&>div]:mb-4">
                      <div>
                        <label>Typology</label>
                        <span>{constellationData[showPlace].typology}</span>
                      </div>
                      <div>
                        <label>Ethnicity</label>
                        <span>{constellationData[showPlace].ethnicity}</span>
                      </div>
                      <div>
                        <label>Specialty</label>
                        <span>{constellationData[showPlace].speciality}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
