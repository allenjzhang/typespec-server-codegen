// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;
using Todo;

namespace Todo.Models
{
    /// <summary> The TodoFileAttachment. </summary>
    public partial class TodoFileAttachment
    {
        /// <summary> Keeps track of any properties unknown to the library. </summary>
        private protected readonly IDictionary<string, BinaryData> _additionalBinaryDataProperties;

        /// <summary> Initializes a new instance of <see cref="TodoFileAttachment"/>. </summary>
        /// <param name="contents"></param>
        /// <exception cref="ArgumentNullException"> <paramref name="contents"/> is null. </exception>
        public TodoFileAttachment(BinaryData contents)
        {
            Argument.AssertNotNull(contents, nameof(contents));

            Contents = contents;
        }

        internal TodoFileAttachment(string contentType, string filename, BinaryData contents, IDictionary<string, BinaryData> additionalBinaryDataProperties)
        {
            ContentType = contentType;
            Filename = filename;
            Contents = contents;
            _additionalBinaryDataProperties = additionalBinaryDataProperties;
        }

        /// <summary> Gets or sets the ContentType. </summary>
        public string ContentType { get; set; }

        /// <summary> Gets or sets the Filename. </summary>
        public string Filename { get; set; }

        /// <summary>
        /// Gets or sets the Contents.
        /// <para>
        /// To assign a byte[] to this property use <see cref="BinaryData.FromBytes(byte[])"/>.
        /// The byte[] will be serialized to a Base64 encoded string.
        /// </para>
        /// <para>
        /// Examples:
        /// <list type="bullet">
        /// <item>
        /// <term> BinaryData.FromBytes(new byte[] { 1, 2, 3 }). </term>
        /// <description> Creates a payload of "AQID". </description>
        /// </item>
        /// </list>
        /// </para>
        /// </summary>
        public BinaryData Contents { get; set; }
    }
}
