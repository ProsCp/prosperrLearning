
    
    // // Fetch data for specialization by cp

    
    // const [first, SetFirst] = useState({
    //     loading: false,
    //     data: [],
    //   });
    //   useEffect(() => {
    //       console.log("hhhh");
    //     const url = "https://stage-apis.prosperr.io/specializations/v1/all";
    
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(url);
    //         const items = await response.json();
    //         console.log(items);
    //         SetFirst({
    //           loading: true,
    //           data: items,
    //         });
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
    //   console.log(first);
    //   if (first.loading) {
    //     console.log(first.data.map((d, i) => d.specialization));
    //   } else {
    //     console.log("abhi time hai");
    //   }
    //   console.log(first);
    // //   let tags = first.data.map((d, i) => (
    // //     { value:  `${d.specialization}`, label:  `${d.specialization}`}
    // // ))