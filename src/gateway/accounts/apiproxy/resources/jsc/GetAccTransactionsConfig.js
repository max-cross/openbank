/*
 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @file
 * GetAccTransactionsConfig.js
 * Script is used valid the request based on the config defined
 */
var GetAccTransactionsResourceConfig =
    {
        "Headers": [
            {"Authorization": {"Mandatory": true}},
            {"x-fapi-financial-id": {"Mandatory": true}}

        ],

        "QueryParams": [
            {"toBookingDateTime": {"ValueType": "Date"}},
            {"fromBookingDateTime": {"ValueType": "Date"}}
        ]
    };

var error = validateRequest(GetAccTransactionsResourceConfig);
if (error.isError) {
    context.setVariable("isError", error.isError);
    context.setVariable("errorResponseCode", error.errorResponseCode);
    context.setVariable("errorDescription", error.errorDescription);
}
else {
    context.setVariable("isError", false);
}