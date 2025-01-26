const id = "uuid",
  nullable = true;

const $id = "urn:jsonschema:page",
  additionalProperties = false,
  dynamicDefaults = { id },
  type = "object",
  properties = {
    along: { default: true, type: "boolean" },
    alt: {
      default: [],
      items: { type: "string" },
      type: "array",
    },
    changefreq: {
      default: null,
      enum: [
        "always",
        "hourly",
        "daily",
        "weekly",
        "monthly",
        "yearly",
        "never",
        null,
      ],
      nullable,
      type: "string",
    },
    children: {
      default: [],
      items: { type: "object" },
      type: "array",
    },
    class: {
      default: [],
      description: "Классы",
      items: { type: "string" },
      type: "array",
    },
    description: { default: null, nullable, type: "string" },
    enabled: { default: true, type: "boolean" },
    header: { type: "string" },
    icon: { type: "string" },
    id: { type: "string" },
    images: {
      default: [],
      items: {
        properties: {
          alt: { type: "string" },
          url: { default: "", type: "string" },
        },
        type: "object",
      },
      type: "array",
    },
    keywords: {
      default: [],
      items: { type: "string" },
      type: "array",
    },
    lastmod: { default: null, nullable, type: "string" },
    loc: { default: null, nullable, type: "string" },
    name: { default: null, nullable, type: "string" },
    priority: {
      default: null,
      maximum: 1,
      minimum: 0,
      nullable,
      type: "number",
    },
    type: {
      default: null,
      enum: [
        "article",
        "book",
        "profile",
        "website",
        "music.song",
        "music.album",
        "music.playlist",
        "music.radio_station",
        "video.movie",
        "video.episode",
        "video.tv_show",
        "video.other",
        null,
      ],
      nullable,
      type: "string",
    },
  } as const;

/* -------------------------------------------------------------------------- */

export default {
  $id,
  additionalProperties,
  dynamicDefaults,
  properties,
  type,
} as const;
