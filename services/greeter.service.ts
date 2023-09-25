import type { Context, Service, ServiceSchema } from "moleculer";

export interface ActionHelloParams {
  name: string;
}

interface GreeterSettings {
  defaultName: string;
}

interface GreeterMethods {
  uppercase(str: string): string;
}

interface GreeterLocalVars {
  myVar: string;
}

type GreeterThis = Service<GreeterSettings> & GreeterMethods & GreeterLocalVars;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const GreeterService: ServiceSchema<GreeterSettings> = {
  name: "greeter",

  /**
   * Settings
   */
  settings: {
    defaultName: "Moleculer",
  },

  /**
   * Dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {
    hello: {
      rest: {
        method: "GET",
        path: "/",
      },
      async handler(this: GreeterThis /* , ctx: Context */): Promise<{
        date: string;
      }> {
        const date = new Date();
        console.log(date);
        await delay(50);

        return {
          date: date.toDateString(),
        };
      },
    },

    welcome: {
      rest: "GET /welcome/:name",
      params: {
        name: "string",
      },
      handler(this: GreeterThis, ctx: Context<ActionHelloParams>): string {
        return `Welcome, ${ctx.params.name}`;
      },
    },
  },

  /**
   * Events
   */
  events: {},

  /**
   * Methods
   */
  methods: {},
};

export default GreeterService;
