// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Collections.Generic;
using System.Text.Json;
using Todo;

namespace Todo.Models
{
    /// <summary></summary>
    public partial class TodoItem : IJsonModel<TodoItem>
    {
        internal TodoItem()
        {
        }

        void IJsonModel<TodoItem>.Write(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            writer.WriteStartObject();
            JsonModelWriteCore(writer, options);
            writer.WriteEndObject();
        }

        /// <param name="writer"> The JSON writer. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected virtual void JsonModelWriteCore(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<TodoItem>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(TodoItem)} does not support writing '{format}' format.");
            }
            if (options.Format != "W")
            {
                writer.WritePropertyName("id"u8);
                writer.WriteNumberValue(Id);
            }
            writer.WritePropertyName("title"u8);
            writer.WriteStringValue(Title);
            if (options.Format != "W")
            {
                writer.WritePropertyName("createdBy"u8);
                writer.WriteNumberValue(CreatedBy);
            }
            if (Optional.IsDefined(AssignedTo))
            {
                writer.WritePropertyName("assignedTo"u8);
                writer.WriteNumberValue(AssignedTo.Value);
            }
            if (Optional.IsDefined(Description))
            {
                writer.WritePropertyName("description"u8);
                writer.WriteStringValue(Description);
            }
            writer.WritePropertyName("status"u8);
            writer.WriteStringValue(Status.ToSerialString());
            if (options.Format != "W")
            {
                writer.WritePropertyName("createdAt"u8);
                writer.WriteStringValue(CreatedAt, "O");
            }
            if (options.Format != "W")
            {
                writer.WritePropertyName("updatedAt"u8);
                writer.WriteStringValue(UpdatedAt, "O");
            }
            if (options.Format != "W" && Optional.IsDefined(CompletedAt))
            {
                writer.WritePropertyName("completedAt"u8);
                writer.WriteStringValue(CompletedAt.Value, "O");
            }
            if (Optional.IsDefined(Labels))
            {
                writer.WritePropertyName("labels"u8);
#if NET6_0_OR_GREATER
                writer.WriteRawValue(Labels);
#else
                using (JsonDocument document = JsonDocument.Parse(Labels))
                {
                    JsonSerializer.Serialize(writer, document.RootElement);
                }
#endif
            }
            if (Optional.IsDefined(Dummy))
            {
                writer.WritePropertyName("_dummy"u8);
                writer.WriteStringValue(Dummy);
            }
            if (options.Format != "W" && _additionalBinaryDataProperties != null)
            {
                foreach (var item in _additionalBinaryDataProperties)
                {
                    writer.WritePropertyName(item.Key);
#if NET6_0_OR_GREATER
                    writer.WriteRawValue(item.Value);
#else
                    using (JsonDocument document = JsonDocument.Parse(item.Value))
                    {
                        JsonSerializer.Serialize(writer, document.RootElement);
                    }
#endif
                }
            }
        }

        TodoItem IJsonModel<TodoItem>.Create(ref Utf8JsonReader reader, ModelReaderWriterOptions options) => JsonModelCreateCore(ref reader, options);

        /// <param name="reader"> The JSON reader. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected virtual TodoItem JsonModelCreateCore(ref Utf8JsonReader reader, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<TodoItem>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(TodoItem)} does not support reading '{format}' format.");
            }
            using JsonDocument document = JsonDocument.ParseValue(ref reader);
            return DeserializeTodoItem(document.RootElement, options);
        }

        internal static TodoItem DeserializeTodoItem(JsonElement element, ModelReaderWriterOptions options)
        {
            if (element.ValueKind == JsonValueKind.Null)
            {
                return null;
            }
            long id = default;
            string title = default;
            long createdBy = default;
            long? assignedTo = default;
            string description = default;
            TodoItemStatus status = default;
            DateTimeOffset createdAt = default;
            DateTimeOffset updatedAt = default;
            DateTimeOffset? completedAt = default;
            BinaryData labels = default;
            string dummy = default;
            IDictionary<string, BinaryData> additionalBinaryDataProperties = new ChangeTrackingDictionary<string, BinaryData>();
            foreach (var prop in element.EnumerateObject())
            {
                if (prop.NameEquals("id"u8))
                {
                    id = prop.Value.GetInt64();
                    continue;
                }
                if (prop.NameEquals("title"u8))
                {
                    title = prop.Value.GetString();
                    continue;
                }
                if (prop.NameEquals("createdBy"u8))
                {
                    createdBy = prop.Value.GetInt64();
                    continue;
                }
                if (prop.NameEquals("assignedTo"u8))
                {
                    if (prop.Value.ValueKind == JsonValueKind.Null)
                    {
                        continue;
                    }
                    assignedTo = prop.Value.GetInt64();
                    continue;
                }
                if (prop.NameEquals("description"u8))
                {
                    description = prop.Value.GetString();
                    continue;
                }
                if (prop.NameEquals("status"u8))
                {
                    status = prop.Value.GetString().ToTodoItemStatus();
                    continue;
                }
                if (prop.NameEquals("createdAt"u8))
                {
                    createdAt = prop.Value.GetDateTimeOffset("O");
                    continue;
                }
                if (prop.NameEquals("updatedAt"u8))
                {
                    updatedAt = prop.Value.GetDateTimeOffset("O");
                    continue;
                }
                if (prop.NameEquals("completedAt"u8))
                {
                    if (prop.Value.ValueKind == JsonValueKind.Null)
                    {
                        continue;
                    }
                    completedAt = prop.Value.GetDateTimeOffset("O");
                    continue;
                }
                if (prop.NameEquals("labels"u8))
                {
                    if (prop.Value.ValueKind == JsonValueKind.Null)
                    {
                        continue;
                    }
                    labels = BinaryData.FromString(prop.Value.GetRawText());
                    continue;
                }
                if (prop.NameEquals("_dummy"u8))
                {
                    dummy = prop.Value.GetString();
                    continue;
                }
                if (options.Format != "W")
                {
                    additionalBinaryDataProperties.Add(prop.Name, BinaryData.FromString(prop.Value.GetRawText()));
                }
            }
            return new TodoItem(
                id,
                title,
                createdBy,
                assignedTo,
                description,
                status,
                createdAt,
                updatedAt,
                completedAt,
                labels,
                dummy,
                additionalBinaryDataProperties);
        }

        BinaryData IPersistableModel<TodoItem>.Write(ModelReaderWriterOptions options) => PersistableModelWriteCore(options);

        /// <param name="options"> The client options for reading and writing models. </param>
        protected virtual BinaryData PersistableModelWriteCore(ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<TodoItem>)this).GetFormatFromOptions(options) : options.Format;
            switch (format)
            {
                case "J":
                    return ModelReaderWriter.Write(this, options);
                default:
                    throw new FormatException($"The model {nameof(TodoItem)} does not support writing '{options.Format}' format.");
            }
        }

        TodoItem IPersistableModel<TodoItem>.Create(BinaryData data, ModelReaderWriterOptions options) => PersistableModelCreateCore(data, options);

        /// <param name="data"> The data to parse. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected virtual TodoItem PersistableModelCreateCore(BinaryData data, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<TodoItem>)this).GetFormatFromOptions(options) : options.Format;
            switch (format)
            {
                case "J":
                    using (JsonDocument document = JsonDocument.Parse(data))
                    {
                        return DeserializeTodoItem(document.RootElement, options);
                    }
                default:
                    throw new FormatException($"The model {nameof(TodoItem)} does not support reading '{options.Format}' format.");
            }
        }

        string IPersistableModel<TodoItem>.GetFormatFromOptions(ModelReaderWriterOptions options) => "J";

        /// <param name="todoItem"> The <see cref="TodoItem"/> to serialize into <see cref="BinaryContent"/>. </param>
        public static implicit operator BinaryContent(TodoItem todoItem)
        {
            if (todoItem == null)
            {
                return null;
            }
            return BinaryContent.Create(todoItem, ModelSerializationExtensions.WireOptions);
        }

        /// <param name="result"> The <see cref="ClientResult"/> to deserialize the <see cref="TodoItem"/> from. </param>
        public static explicit operator TodoItem(ClientResult result)
        {
            using PipelineResponse response = result.GetRawResponse();
            using JsonDocument document = JsonDocument.Parse(response.Content);
            return DeserializeTodoItem(document.RootElement, ModelSerializationExtensions.WireOptions);
        }
    }
}
