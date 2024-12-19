// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;
using System.Text.Json;

namespace Todo.Models
{
    /// <summary> The CreateJsonResponse. </summary>
    public partial class CreateJsonResponse
    {
        /// <summary> Keeps track of any properties unknown to the library. </summary>
        private protected readonly IDictionary<string, BinaryData> _additionalBinaryDataProperties;

        internal CreateJsonResponse(string title, TodoItemStatus status)
        {
            Title = title;
            Status = status;
        }

        internal CreateJsonResponse(long id, string title, long createdBy, long? assignedTo, string description, TodoItemStatus status, DateTimeOffset createdAt, DateTimeOffset updatedAt, DateTimeOffset? completedAt, BinaryData labels, IDictionary<string, BinaryData> additionalBinaryDataProperties)
        {
            Id = id;
            Title = title;
            CreatedBy = createdBy;
            AssignedTo = assignedTo;
            Description = description;
            Status = status;
            CreatedAt = createdAt;
            UpdatedAt = updatedAt;
            CompletedAt = completedAt;
            Labels = labels;
            _additionalBinaryDataProperties = additionalBinaryDataProperties;
        }

        /// <summary> The item's unique id. </summary>
        public long Id { get; }

        /// <summary> The item's title. </summary>
        public string Title { get; }

        /// <summary> User that created the todo. </summary>
        public long CreatedBy { get; }

        /// <summary> User that the todo is assigned to. </summary>
        public long? AssignedTo { get; }

        /// <summary> A longer description of the todo item in markdown format. </summary>
        public string Description { get; }

        /// <summary> The status of the todo item. </summary>
        public TodoItemStatus Status { get; }

        /// <summary> When the todo item was created. </summary>
        public DateTimeOffset CreatedAt { get; }

        /// <summary> When the todo item was last updated. </summary>
        public DateTimeOffset UpdatedAt { get; }

        /// <summary> When the todo item was makred as completed. </summary>
        public DateTimeOffset? CompletedAt { get; }

        /// <summary>
        /// Gets the Labels.
        /// <para> To assign an object to this property use <see cref="BinaryData.FromObjectAsJson{T}(T, JsonSerializerOptions?)"/>. </para>
        /// <para> To assign an already formatted json string to this property use <see cref="BinaryData.FromString(string)"/>. </para>
        /// <para>
        /// <remarks>
        /// Supported types:
        /// <list type="bullet">
        /// <item>
        /// <description> <see cref="string"/>. </description>
        /// </item>
        /// <item>
        /// <description> <see cref="IList{T}"/> where <c>T</c> is of type <see cref="string"/>. </description>
        /// </item>
        /// <item>
        /// <description> <see cref="TodoLabelRecord"/>. </description>
        /// </item>
        /// <item>
        /// <description> <see cref="IList{T}"/> where <c>T</c> is of type <see cref="TodoLabelRecord"/>. </description>
        /// </item>
        /// </list>
        /// </remarks>
        /// </para>
        /// <para>
        /// Examples:
        /// <list type="bullet">
        /// <item>
        /// <term> BinaryData.FromObjectAsJson("foo"). </term>
        /// <description> Creates a payload of "foo". </description>
        /// </item>
        /// <item>
        /// <term> BinaryData.FromString("\"foo\""). </term>
        /// <description> Creates a payload of "foo". </description>
        /// </item>
        /// <item>
        /// <term> BinaryData.FromObjectAsJson(new { key = "value" }). </term>
        /// <description> Creates a payload of { "key": "value" }. </description>
        /// </item>
        /// <item>
        /// <term> BinaryData.FromString("{\"key\": \"value\"}"). </term>
        /// <description> Creates a payload of { "key": "value" }. </description>
        /// </item>
        /// </list>
        /// </para>
        /// </summary>
        public BinaryData Labels { get; }
    }
}
