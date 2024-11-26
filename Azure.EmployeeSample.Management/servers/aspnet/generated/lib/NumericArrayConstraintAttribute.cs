// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />
#nullable enable

using System.Numerics;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace TypeSpec.Helpers.JsonConverters
{
    /// <summary>
    /// Constrains an array and the item types within it
    /// </summary>
    /// <typeparam name="T">The item type</typeparam>
    public class NumericArrayConstraintAttribute<T> : ArrayConstraintAttribute<T> where T : struct, INumber<T>
    {
        T? _minValue = null, _maxValue = null;
        public NumericArrayConstraintAttribute() : base()
        {
        }

        public T MinValue { get { return _minValue.HasValue ? _minValue.Value : default(T); } set { _minValue = value; } }
        public T MaxValue { get { return _maxValue.HasValue ? _maxValue.Value : default(T); } set { _maxValue = value; } }
        bool MinValueExclusive { get; set; }
        bool MaxValueExclusive { get; set; }

        public override JsonConverter? CreateConverter(Type typeToConvert)
        {
            var result = base.CreateConverter(typeToConvert) as ConstrainedArrayConverter<T>;
            if (result != null) result.InnerConverterFactory = (c, o) => new NumericJsonConverter<T>(MinValue, MaxValue, MinValueExclusive, MaxValueExclusive, o);
            return result;
        }
    }
}