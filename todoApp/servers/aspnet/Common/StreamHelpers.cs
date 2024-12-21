﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System.Text.Json;

namespace Todo.Service.Common
{
    public static class StreamHelpers
    {
        public static async Task<byte[]> ReadAllAsync(this Stream stream)
        {
            using var ms = new MemoryStream();
            await stream.CopyToAsync(ms);
            return ms.ToArray();
        }

        public static async Task<T?> AsJsonAsync<T>(this Stream stream)
        {
            using var sr = new StreamReader(stream);
            var json = await sr.ReadToEndAsync();
            return JsonSerializer.Deserialize<T>(json);
        }
    }
}
