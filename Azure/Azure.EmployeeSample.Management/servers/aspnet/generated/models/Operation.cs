// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Microsoft.ContosoProviderHub.Service.Models
{

    ///<summary>
    /// Details of a REST API operation, returned from the Resource Provider
    /// ations API
    ///</summary>
    public partial class Operation
    {
        ///<summary>
        /// The name of the operation, as per Resource-Based Access Control (RBAC).
        /// The name of the operation, as per Resource-Based Access Con
        /// ute/virtualMachines/capture/action"
        ///</summary>
        public string Name { get; set; }

        ///<summary>
        /// Whether the operation applies to data-plane. This is "true" for data-plane
        /// ations and "false" for Azure Resource Manager/control-plane operations.
        ///</summary>
        public bool? IsDataAction { get; set; }

        ///<summary>
        /// Localized display information for this particular operation.
        ///</summary>
        public OperationDisplay Display { get; set; }

        ///<summary>
        /// The intended executor of the operation; as in Resource Based Access Control
        /// C) and audit logs UX. Default value is "user,system"
        ///</summary>
        public Origin Origin { get; set; }

        ///<summary>
        /// Extensible enum. Indicates the action type. "Internal" refers to actions
        ///  are for internal only APIs.
        ///</summary>
        public ActionType ActionType { get; set; }


    }
}