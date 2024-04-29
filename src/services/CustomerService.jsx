export const CustomerService = {
  getData() {
    return [
      {
        id: 1001,
        first_name: "Lisa",
        last_name: "Wong",
        country: {
          name: "Canada",
          code: "ca",
        },
        date: "2018-03-21",
        address: "1033 E Center St",
        email: "lisa.wong@example.com",
      },
      {
        id: 1002,
        first_name: "Michael",
        last_name: "Smith",
        country: {
          name: "United Kingdom",
          code: "gb",
        },
        date: "2022-07-15",
        address: "3489 Peachtree St",
        email: "m.smith@example.com",
      },
      {
        id: 1003,
        first_name: "Angela",
        last_name: "Johnson",
        country: {
          name: "Australia",
          code: "au",
        },
        date: "2016-05-30",
        address: "1089 Green St",
        email: "angela.johnson@example.com",
      },
      {
        id: 1004,
        first_name: "Kevin",
        last_name: "Lee",
        country: {
          name: "Ireland",
          code: "ie",
        },
        date: "2017-11-12",
        address: "4567 Maple Rd",
        email: "kevin.lee@example.com",
      },
      {
        id: 1005,
        first_name: "Sarah",
        last_name: "Brown",
        country: {
          name: "New Zealand",
          code: "nz",
        },
        date: "2019-01-20",
        address: "7865 Cedar Ave",
        email: "sarah.b@example.com",
      },
      {
        id: 1006,
        first_name: "Robert",
        last_name: "Davis",
        country: {
          name: "South Africa",
          code: "za",
        },
        date: "2020-04-10",
        address: "2345 Pine St",
        email: "robert.davis@example.com",
      },
      {
        id: 1007,
        first_name: "Patricia",
        last_name: "Martinez",
        country: {
          name: "Mexico",
          code: "mx",
        },
        date: "2021-08-05",
        address: "8769 Elm St",
        email: "patricia.m@example.com",
      },
      {
        id: 1008,
        first_name: "Daniel",
        last_name: "Garcia",
        country: {
          name: "Spain",
          code: "es",
        },
        date: "2014-12-31",
        address: "1023 Oak St",
        email: "daniel.garcia@example.com",
      },
      {
        id: 1009,
        first_name: "Jennifer",
        last_name: "Wilson",
        country: {
          name: "United States",
          code: "us",
        },
        date: "2017-09-21",
        address: "1456 Birch St",
        email: "jennifer.w@example.com",
      },
      {
        id: 1010,
        first_name: "David",
        last_name: "Moore",
        country: {
          name: "Germany",
          code: "de",
        },
        date: "2021-06-17",
        address: "5678 Spruce Dr",
        email: "david.moore@example.com",
      },
      {
        id: 1011,
        first_name: "Maria",
        last_name: "Taylor",
        country: {
          name: "Italy",
          code: "it",
        },
        date: "2015-02-23",
        address: "7890 Willow Rd",
        email: "maria.taylor@example.com",
      },
      {
        id: 1012,
        first_name: "James",
        last_name: "Anderson",
        country: {
          name: "Sweden",
          code: "se",
        },
        date: "2016-10-30",
        address: "1234 Cherry Blvd",
        email: "james.anderson@example.com",
      },
      {
        id: 1013,
        first_name: "Jessica",
        last_name: "Thomas",
        country: {
          name: "Norway",
          code: "no",
        },
        date: "2018-08-19",
        address: "3456 Alder St",
        email: "jessica.thomas@example.com",
      },
      {
        id: 1014,
        first_name: "John",
        last_name: "Jackson",
        country: {
          name: "France",
          code: "fr",
        },
        date: "2019-03-28",
        address: "6789 Fir Ave",
        email: "john.jackson@example.com",
      },
      {
        id: 1015,
        first_name: "Laura",
        last_name: "Harris",
        country: {
          name: "Netherlands",
          code: "nl",
        },
        date: "2020-07-08",
        address: "9012 Linden St",
        email: "laura.harris@example.com",
      },
      {
        id: 1016,
        first_name: "Mark",
        last_name: "Martin",
        country: {
          name: "Belgium",
          code: "be",
        },
        date: "2022-01-25",
        address: "2343 Beech Dr",
        email: "mark.martin@example.com",
      },
      {
        id: 1017,
        first_name: "Elizabeth",
        last_name: "Clark",
        country: {
          name: "Switzerland",
          code: "ch",
        },
        date: "2014-10-20",
        address: "5674 Aspen Way",
        email: "elizabeth.clark@example.com",
      },
      {
        id: 1018,
        first_name: "William",
        last_name: "Lewis",
        country: {
          name: "Austria",
          code: "at",
        },
        date: "2018-04-15",
        address: "8901 Cottonwood Ln",
        email: "william.lewis@example.com",
      },
      {
        id: 1019,
        first_name: "Emma",
        last_name: "Robinson",
        country: {
          name: "Poland",
          code: "pl",
        },
        date: "2023-02-11",
        address: "1235 Pineview Dr",
        email: "emma.robinson@example.com",
      },
      {
        id: 1020,
        first_name: "Richard",
        last_name: "Walker",
        country: {
          name: "Czech Republic",
          code: "cz",
        },
        date: "2020-10-05",
        address: "6786 Redwood Rd",
        email: "richard.walker@example.com",
      },
    ];
  },

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  },

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";

    return fetch(
      "https://www.primefaces.org/data/customers?" + queryParams
    ).then((res) => res.json());
  },
};
