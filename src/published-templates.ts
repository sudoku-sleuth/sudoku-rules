// Generated from the replaces entries of the public pages by scripts/declaration-library.ts.
import type { Template } from './templates.js';
export const publishedTemplates: readonly Template[] = [
  {
    "rule": "close-whispers",
    "spellings": [
      "close-whispers"
    ],
    "form": "close-whispers {\"channel\":\"D\"}",
    "settings": {
      "channel": "D"
    },
    "omit": [
      "channel"
    ],
    "guard": "no-value-binding"
  },
  {
    "rule": "negative",
    "spellings": [
      "negative"
    ],
    "form": "merge-negated-pairs negative",
    "pattern": "merge-negated-pairs",
    "guard": "no-value-binding"
  },
  {
    "rule": "parity-line",
    "spellings": [
      "parity-line",
      "parity"
    ],
    "form": "join-line-pieces parity-line",
    "pattern": "join-line-pieces"
  },
  {
    "rule": "slow-thermo",
    "spellings": [
      "slow-thermo"
    ],
    "form": "slow-thermo {\"channel\":\"D\"}",
    "settings": {
      "channel": "D"
    },
    "omit": [
      "channel"
    ],
    "guard": "no-value-binding"
  },
  {
    "rule": "whispers",
    "spellings": [
      "whispers",
      "whisper"
    ],
    "form": "join-line-pieces whispers",
    "pattern": "join-line-pieces"
  }
];
