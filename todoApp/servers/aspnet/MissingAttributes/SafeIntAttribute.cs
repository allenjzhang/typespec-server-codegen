// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#nullable enable

using System.Text.Json;
using System.Text.Json.Serialization;

namespace TypeSpec.Helpers.JsonConverters
{
    /// <summary>
    /// Provides constraints for a string values property
    /// </summary>
    public class SafeIntAttribute : JsonConverterAttribute
    {
        public SafeIntAttribute()
        {
        }

        public override JsonConverter? CreateConverter(Type typeToConvert)
        {
            return new SafeIntConverter();
        }
    }

    public class SafeIntConverter : JsonConverter<long>
    {
        public SafeIntConverter(JsonSerializerOptions? options = null)
        {
            if (options != null)
            {
                InnerConverter = options.GetConverter(typeof(long)) as JsonConverter<long>;
            }
        }

        private JsonConverter<long>? InnerConverter { get; set; }

        private JsonConverter<long> GetInnerConverter(JsonSerializerOptions options)
        {
            if (InnerConverter == null)
            {
                InnerConverter = (JsonConverter<long>)options.GetConverter(typeof(long));
            }

            return InnerConverter;
        }

        public override bool CanConvert(Type typeToConvert)
        {
            return base.CanConvert(typeToConvert);
        }

        public override long Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var innerConverter = GetInnerConverter(options);
            long candidate = innerConverter.Read(ref reader, typeToConvert, options);

            return candidate;
        }

        public override void Write(Utf8JsonWriter writer, long value, JsonSerializerOptions options)
        {
            GetInnerConverter(options).Write(writer, value, options);
        }
    }
}