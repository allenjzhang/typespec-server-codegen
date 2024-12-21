// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Todo.Service.Models
{

    public partial class UserCreatedResponse
    {
        ///<summary>
        /// An autogenerated unique id for the user
        ///</summary>
        [TypeSpec.Helpers.JsonConverters.NumericConstraint<long>(MinValue = -9007199254740991, MaxValue = 9007199254740991)]
        public long Id { get; set; }

        ///<summary>
        /// The user's username
        ///</summary>
        [TypeSpec.Helpers.JsonConverters.StringConstraint(MinLength = 2, MaxLength = 50)]
        public string Username { get; set; }

        ///<summary>
        /// The user's email address
        ///</summary>
        public string Email { get; set; }

        ///<summary>
        /// The user's password, provided when creating a user but is otherwise not
        /// ble (and hashed by the backend)
        ///</summary>
        public string Password { get; set; }

        ///<summary>
        /// Whether the user is validated. Never visible to the API.
        ///</summary>
        public bool Validated { get; set; }

        ///<summary>
        /// The token to use to construct the validate email address url
        ///</summary>
        public string Token { get; set; }


    }
}
