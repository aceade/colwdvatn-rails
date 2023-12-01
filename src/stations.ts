export interface ArrivalAndDeparture {
    arrival?: string;
    departure?: string;
}

export interface StationEntry {
    location: string;
    dates: ArrivalAndDeparture[];
}

export const inboundStations: StationEntry[] = [
    {
        location: "Grand Central, Levarche",
        dates: [{
            departure: "11am Monday"
        },{
            departure: "11am Wednesday"
        },{
            departure: "11am Friday"
        }]
    },
    {
        location: "Tinland Main Road",
        dates: [{
            arrival: "3pm Monday",
            departure: "4pm Monday"
        }, {
            arrival: "3pm Wednesday",
            departure: "4pm Wednesday"
        }, {
            arrival: "3pm Friday",
            departure: "4pm Friday"
        }]
    },
    {
        location: "Kerbalstead",
        dates: [{
            arrival: "7am Wednesday",
            departure: "10am Wednesday"
        }, {
            arrival: "7am Friday",
            departure: "10am Friday"
        }, {
            arrival: "9am Sunday",
            departure: "11am Sunday"
        }]
    },
    {
        location: "Cowldvatn",
        dates: [{
            arrival: "1pm Wednesday",
        }, {
            arrival: "1pm Friday",
        }, {
            arrival: "2pm Sunday",
        }]
    }
];

export const outboundStations: StationEntry[] = [
    {
        location: "Colwdvatn",
        dates: [{
            departure: "9am Monday"
        },{
            departure: "9am Wednesday"
        },{
            departure: "9am Friday"
        }]
    },
    {
        location: "Kerbalstead",
        dates: [{
            arrival: "12pm Monday",
            departure: "1pm Monday"
        }, {
            arrival: "12pm Wednesday",
            departure: "1pm Wednesday"
        }, {
            arrival: "12pm Friday",
            departure: "1pm Friday"
        }]
    },
    {
        location: "Tinland Main Road",
        dates: [{
            arrival: "3pm Wednesday",
            departure: "5pm Wednesday"
        }, {
            arrival: "3pm Friday",
            departure: "5pm Friday"
        }, {
            arrival: "3pm Sunday",
            departure: "4pm Sunday"
        }]
    },
    {
        location: "Grand Central, Levarche",
        dates: [{
            arrival: "9am Friday",
        }, {
            arrival: "9am Monday",
        }, {
            arrival: "2pm Wednesday",
        }]
    }
];