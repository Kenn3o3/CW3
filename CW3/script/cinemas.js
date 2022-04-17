function getCinemas() {
    return [
        {
            branchName:"Kenny's Cinema - Central",
            movies:[
                {   id:1,
                    shows:[
                    {   
                        index:1,
                        datetime:"8 Nov, Sun - 9:00am",
                        house:3            
                    },
                    {   
                        index:2,
                        datetime:"10 Nov, Tue - 11:00am",
                        house:3            
                    }
                    ]
                },
                {   id:2,
                    shows:[
                    {   
                        index:3,
                        datetime:"9 Nov, Mon - 2:00pm",
                        house:1            
                    }
                    ]
                }
            ]
        },
        
        {
            branchName:"Kenny's Cinema - Causeway Bay",
            movies:[
                {
                    id:2,
                    shows:[
                        {
                            index:4,
                            datetime:"11 Nov, Wed - 9:00am",
                            house:4
                        },
                        {
                            index:5,
                            datetime:"11 Nov, Wed - 11:00am",
                            house:2
                        }
                    ]
                }
            ]
        },
        {
            branchName:"Kenny's Cinema - Kowloon City",
            movies:[
                {
                    id:1,
                    shows:[
                        {
                            index:6,
                            datetime:"11 Nov, Wed - 9:00am",
                            house:4
                        }
                    ]
                }
            ]
        },
        {
            branchName:"Kenny's Cinema - MongKok",
            movies:[
                {
                    id:3,
                    shows:[
                        {
                            index:6,
                            datetime:"11 Nov, Wed - 9:00am",
                            house:4
                        }
                    ]
                }
            ]
        }
    ]
}
